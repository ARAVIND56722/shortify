const Url = require("../models/Url");
const { nanoid } = require("nanoid");
const validator = require("validator");
const QRCode = require("qrcode");
const Visit = require("../models/Visit");
const UAParser = require("ua-parser-js");
const csv = require("csv-parser");
const stream = require("stream");

exports.createShortUrl = async (req, res) => {
  try {
    const {
      originalUrl,
      customAlias,
      expiryDate,
    } = req.body;

    if (!validator.isURL(originalUrl)) {
      return res.status(400).json({
        success: false,
        message: "Invalid URL",
      });
    }

    if (
  customAlias &&
  !/^[a-zA-Z0-9_-]+$/.test(customAlias)
) {
  return res.status(400).json({
    success: false,
    message:
      "Alias can contain only letters, numbers, hyphens and underscores",
  });
}

    let shortCode;

    if (customAlias) {
      const aliasExists =
        await Url.findOne({
          shortCode: customAlias,
        });

      if (aliasExists) {
        return res.status(400).json({
          success: false,
          message: "Alias already exists",
        });
      }

      shortCode = customAlias;
    } else {
      shortCode = nanoid(7);
    }

    const shortUrl =
      `${process.env.BASE_URL}/${shortCode}`;

    const qrCode =
      await QRCode.toDataURL(shortUrl);

    const url = await Url.create({
  user: req.user.userId,
  originalUrl,
  shortCode,
  customAlias,
  shortUrl,
  qrCode,
  expiryDate:
    expiryDate && expiryDate.trim() !== ""
      ? new Date(expiryDate)
      : null,
});
    res.status(201).json({
      success: true,
      url,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

exports.redirectUrl = async (req, res) => {
  try {
    const { shortCode } = req.params;

    const url = await Url.findOne({
      shortCode,
    });

    if (!url) {
      return res.status(404).json({
        success: false,
        message: "URL not found",
      });
    }
console.log("Short Code:", shortCode);
console.log("Expiry Date:", url.expiryDate);
console.log("Current Date:", new Date());
    if (
  url.expiryDate !== null &&
  url.expiryDate !== undefined &&
  new Date() > new Date(url.expiryDate)
) 
    {
      return res.status(410).json({
        success: false,
        message: "URL expired",
      });
    }

    const parser = new UAParser(
      req.headers["user-agent"]
    );

    const browser =
      parser.getBrowser().name || "Unknown";

    const device =
      parser.getDevice().type || "Desktop";

    const os =
      parser.getOS().name || "Unknown";

    await Visit.create({
      url: url._id,
      browser,
      device,
      os,
    });

    url.clickCount += 1;
    url.lastVisited = new Date();

    await url.save();

    return res.redirect(url.originalUrl);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

exports.getUserUrls = async (req, res) => {
  try {
    const urls = await Url.find({
      user: req.user.userId,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: urls.length,
      urls,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


exports.deleteUrl = async (req, res) => {
  try {
    const { id } = req.params;

    const url = await Url.findOne({
      _id: id,
      user: req.user.userId,
    });

    if (!url) {
      return res.status(404).json({
        success: false,
        message: "URL not found",
      });
    }

    await url.deleteOne();

    res.status(200).json({
      success: true,
      message: "URL deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

exports.updateUrl = async (req, res) => {
  try {
    const { id } = req.params;

    const { originalUrl, expiryDate } =
      req.body;

    const url = await Url.findOne({
      _id: id,
      user: req.user.userId,
    });

    if (!url) {
      return res.status(404).json({
        success: false,
        message: "URL not found",
      });
    }

    if (originalUrl) {
      url.originalUrl = originalUrl;
    }

    if (expiryDate) {
      url.expiryDate = expiryDate;
    }

    await url.save();

    res.status(200).json({
      success: true,
      url,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

exports.bulkUploadUrls = async (
  req,
  res
) => {
  try {
    console.log("File Received:", req.file);
    console.log("User:", req.user);
    
    const results = [];

    const readable =
      new stream.Readable();

    readable.push(req.file.buffer);
    readable.push(null);

    readable
      .pipe(csv())
      .on("data", (row) => {
        results.push(row);
      })
      .on("end", async () => {
        const urls = [];

        for (const row of results) {
  const shortCode =
    nanoid(7);

  urls.push({
    user: req.user.userId,
    originalUrl:
      row.originalUrl,
    shortCode,
    shortUrl:
      `${process.env.BASE_URL}/${shortCode}`,
  });
}
        const inserted =
          await Url.insertMany(urls);

        res.status(201).json({
          success: true,
          count: inserted.length,
        });
      });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
