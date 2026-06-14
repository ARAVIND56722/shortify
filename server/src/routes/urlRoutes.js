const express = require("express");

const router = express.Router();

const authMiddleware = require(
  "../middlewares/authMiddleware"
);

const {
  createShortUrl,
  getUserUrls,
  deleteUrl,
  updateUrl,
  bulkUploadUrls,
} = require("../controllers/urlController");

const upload =
  require("../middlewares/uploadMiddleware");




router.post(
  "/",
  authMiddleware,
  createShortUrl
);

router.get(
  "/",
  authMiddleware,
  getUserUrls
);

router.put(
  "/:id",
  authMiddleware,
  updateUrl
);

router.delete(
  "/:id",
  authMiddleware,
  deleteUrl
);

router.post(
  "/bulk-upload",
  authMiddleware,
  upload.single("file"),
  bulkUploadUrls
);

module.exports = router;