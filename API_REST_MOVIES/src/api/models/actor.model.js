const mongoose = require("mongoose");

const actorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: false,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const ActorModel = mongoose.model("actors", actorSchema);

module.exports = ActorModel;
