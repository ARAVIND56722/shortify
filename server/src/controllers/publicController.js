const Url = require("../models/Url");

exports.publicStats = async (
  req,
  res
) => {
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

    res.status(200).json({
      success: true,
      data: {
        shortCode: url.shortCode,
        originalUrl: url.originalUrl,
        clickCount: url.clickCount,
        createdAt: url.createdAt,
        lastVisited: url.lastVisited,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};