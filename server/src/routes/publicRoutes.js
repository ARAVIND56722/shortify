const express = require("express");

const router = express.Router();

const {
  publicStats,
} = require("../controllers/publicController");

router.get(
  "/stats/:shortCode",
  publicStats
);

module.exports = router;