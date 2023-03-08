const mongoose = require("mongoose");

const concesionarioSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    cars: [
      { type: mongoose.Schema.Types.ObjectId, ref: "cars", required: true },
    ],
  },
  {
    timestamps: true,
  }
);

const Car = mongoose.model("concesionario", concesionarioSchema);

module.exports = Car;
