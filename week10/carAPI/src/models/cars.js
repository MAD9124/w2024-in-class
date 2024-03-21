const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    make: { type: String, minLength: 3, maxLength: 64 },
    model: String,
    colour: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Car", carSchema);
