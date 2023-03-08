const express = require("express");
const { isAuth } = require("../../middlewares/auth.middleware");
const CarRoutes = express.Router();

const { upload } = require("../../middlewares/files.middleware");

const {
  retrieveAllCars,
  retrieveCarById,
  createCar,
  updateCarById,
  deleteCarById,
} = require("../controllers/car.controller");

CarRoutes.get("/", retrieveAllCars);
CarRoutes.get("/:id", retrieveCarById);
CarRoutes.post("/", [isAuth], upload.single("image"), createCar);
CarRoutes.patch("/:id", [isAuth], upload.single("image"), updateCarById);
CarRoutes.delete("/:id", [isAuth], deleteCarById);

module.exports = CarRoutes;
