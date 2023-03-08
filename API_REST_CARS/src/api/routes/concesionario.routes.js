const express = require("express");
const ConcesionarioRoutes = express.Router();
const {
  retrieveAllConcesionarios,
  retrieveConcesionarioById,
  createConcesionario,
  updateConcesionarioById,
  deleteConcesionarioById,
} = require("../controllers/concesionario.controller");

ConcesionarioRoutes.get("/", retrieveAllConcesionarios);
ConcesionarioRoutes.get("/:id", retrieveConcesionarioById);
ConcesionarioRoutes.post("/", createConcesionario);
ConcesionarioRoutes.patch("/:id", updateConcesionarioById);
ConcesionarioRoutes.delete("/:id", deleteConcesionarioById);

module.exports = ConcesionarioRoutes;
