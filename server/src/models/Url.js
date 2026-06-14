const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    originalUrl: {
      type: String,
      required: true,
    },

    shortCode: {
      type: String,
      required: true,
      unique: true,
    },

    customAlias: {
      type: String,
      default: null,
    },

    shortUrl: {
      type: String,
      required: true,
    },

    qrCode: {
      type: String,
      default: "",
    },

    expiryDate: {
      type: Date,
      default: null,
    },

    clickCount: {
      type: Number,
      default: 0,
    },

    lastVisited: {
  type: Date,
  default: null,
},

  },
  {
    timestamps: true,
  }
);
urlSchema.index({ shortCode: 1 });

urlSchema.index({ user: 1 });
module.exports = mongoose.model("Url", urlSchema);