const express = require("express");
const MovieRoutes = express.Router();
const {
  retrieveAllMovies,
  retrieveMovieById,
  createMovie,
  updateMovieById,
  deleteMovieById,
} = require("../controllers/movie.controller");

MovieRoutes.get("/all", retrieveAllMovies);
MovieRoutes.get("/:id", retrieveMovieById);
MovieRoutes.post("/", createMovie);
MovieRoutes.patch("/:id", updateMovieById);
MovieRoutes.delete("/:id", deleteMovieById);

module.exports = MovieRoutes;
