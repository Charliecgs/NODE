const Car = require("../models/car.model");
const { deleteImgCloudinary } = require("../../middlewares/files.middleware");

async function retrieveAllCars(req, res, next) {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    return next(error);
  }
}

async function retrieveCarById(req, res, next) {
  try {
    const { id } = req.params;
    const car = await Car.findById(id);
    res.status(200).json(car);
  } catch (error) {
    return next(error);
  }
}

const createCar = async (req, res, next) => {
  try {
    const newCar = new Car({
      ...req.body,
      image: req.file ? req.file.path : "Not image found",
    });
    const createdCar = await newCar.save();
    return res.status(201).json(createdCar);
  } catch (error) {
    return next(error);
  }
};

async function updateCarById(req, res, next) {
  try {
    const { id } = req.params;
    const newCar = new Car(req.body);
    newCar._id = id;

    const originalCar = await Car.findById(id);
    if (req.file) {
      deleteImgCloudinary(originalCar.image);
      newCar.image = req.file.path;
    }
    await Car.findByIdAndUpdate(id, newCar);
    return res.status(200).json(newCar);
  } catch (error) {
    return next(error);
  }
}

async function deleteCarById(req, res, next) {
  try {
    const { id } = req.params;
    const car = await Car.findByIdAndDelete(id);

    if (car.image) {
      deleteImgCloudinary(car.image);
    }
    res.status(200).json(car);
  } catch (error) {
    return next("Error deleting character", error);
  }
}

module.exports = {
  retrieveAllCars,
  retrieveCarById,
  createCar,
  updateCarById,
  deleteCarById,
};
