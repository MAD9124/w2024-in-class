const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    make: String,
    model: String,
    colour: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Car", carSchema);
