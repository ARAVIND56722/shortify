const Url = require("../models/Url");
const Visit = require("../models/Visit");

exports.getUrlAnalytics = async (
  req,
  res
) => {
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

    const visits = await Visit.find({
      url: id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      analytics: {
        totalClicks: url.clickCount,
        lastVisited: url.lastVisited,
        recentVisits: visits,
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

exports.getDailyTrends = async (
  req,
  res
) => {
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

    const trends = await Visit.aggregate([
      {
        $match: {
          url: url._id,
        },
      },
      {
        $group: {
          _id: {
            $dateToString: {
              format: "%Y-%m-%d",
              date: "$timestamp",
            },
          },
          clicks: {
            $sum: 1,
          },
        },
      },
      {
        $sort: {
          _id: 1,
        },
      },
    ]);

    res.status(200).json({
      success: true,
      trends,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};