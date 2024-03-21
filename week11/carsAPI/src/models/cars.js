const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    make: { type: String, minLength: 3, maxLength: 64 },
    model: { type: String, minLength: 3, maxLength: 64 },
    colour: { type: String, minLength: 3, maxLength: 64 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Car", carSchema);
