"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      minlength: 5,
      required: true
    },
    body: {
      type: String,
      trim: true,
      minlength: 10,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Post", schema);
