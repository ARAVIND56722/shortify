const express = require("express");

const router = express.Router();

const authMiddleware = require(
  "../middlewares/authMiddleware"
);

const {
  getUrlAnalytics,
  getDailyTrends,
} = require("../controllers/analyticsController");

// IMPORTANT: Specific route first
router.get(
  "/trends/:id",
  authMiddleware,
  getDailyTrends
);

router.get(
  "/:id",
  authMiddleware,
  getUrlAnalytics
);

module.exports = router;