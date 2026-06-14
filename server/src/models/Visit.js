const mongoose = require("mongoose");

const visitSchema = new mongoose.Schema(
  {
    url: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Url",
      required: true,
    },

    browser: {
      type: String,
      default: "Unknown",
    },

    device: {
      type: String,
      default: "Unknown",
    },

    os: {
      type: String,
      default: "Unknown",
    },

    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

visitSchema.index({
  url: 1,
});

visitSchema.index({
  timestamp: -1,
});

module.exports = mongoose.model("Visit", visitSchema);