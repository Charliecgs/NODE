const Concesionario = require("../models/concesionario.model");

async function retrieveAllConcesionarios(req, res, next) {
  try {
    const concesionarios = await Concesionario.find().populate("cars");
    res.status(200).json(concesionarios);
  } catch (error) {
    return next(error);
  }
}

async function retrieveConcesionarioById(req, res, next) {
  try {
    const { id } = req.params;
    const concesionario = await Concesionario.findById(id).populate("cars");
    res.status(200).json(concesionario);
  } catch (error) {
    return next(error);
  }
}

async function createConcesionario(req, res, next) {
  try {
    const concesionario = new Concesionario(req.body);
    const concesionarioDB = await concesionario.save();
    res.status(201).json(concesionarioDB);
  } catch (error) {
    return next(error);
  }
}

async function updateConcesionarioById(req, res, next) {
  try {
    const { id } = req.params;
    const updateConcesionario = await Concesionario.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updateConcesionario);
  } catch (error) {
    return next(error);
  }
}

async function deleteConcesionarioById(req, res, next) {
  try {
    const { id } = req.params;
    const concesionario = await Concesionario.findByIdAndDelete(id);
    res.status(200).json(concesionario);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  retrieveAllConcesionarios,
  retrieveConcesionarioById,
  createConcesionario,
  updateConcesionarioById,
  deleteConcesionarioById,
};
