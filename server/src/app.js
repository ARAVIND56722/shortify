// src/app.js

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const authRoutes = require("./routes/authRoutes");
const app = express();
const urlRoutes = require("./routes/urlRoutes");
const {
  redirectUrl,
} = require("./controllers/urlController");

const analyticsRoutes =
  require("./routes/analyticsRoutes");

const publicRoutes =
  require("./routes/publicRoutes");

const rateLimiter =
  require("./middlewares/rateLimiter");




app.use(helmet());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);


app.use(rateLimiter);
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use(morgan("dev"));
app.use("/api/urls", urlRoutes);
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "URL Shortener API Running",
  });
});

app.use(
  "/api/analytics",
  analyticsRoutes
);
app.use(
  "/api/public",
  publicRoutes
);




app.get("/:shortCode", redirectUrl);

module.exports = app;