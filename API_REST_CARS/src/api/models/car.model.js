const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: String,
      required: false,
      trim: true,
      // validate: {
      //   validator: (v) =>
      //     v instanceof Date &&
      //     v.getFullYear() >= 2005 &&
      //     v.getFullYear() <= 2023,
      //   message: "Year between 2005 & 2023",
      // },
    },
    model: {
      type: String,
      required: false,
      trim: true,
    },
    color: {
      type: String,
      required: false,
      trim: true,
    },
    image: { type: String, required: false, trim: true },
  },
  {
    timestamps: true,
  }
);

const CarModel = mongoose.model("cars", carSchema);

module.exports = CarModel;
