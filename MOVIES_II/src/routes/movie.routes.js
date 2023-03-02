const express = require("express");
//Creamos el router
const router = express.Router();
//Importamos el modelo
const Movie = require("../models/movie.model");

//GET ALL MOVIES
router.get("/", async (req, res, next) => {
  try {
    const movies = await Movie.find();
    return res.status(200).json(movies);
  } catch (error) {
    return next(error);
  }
});

//GET MOVIE BY ID
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    return res.status(200).json(movie);
  } catch (error) {
    return next(error);
  }
});

//CREATE MOVIE
router.post("/", async (req, res, next) => {
  try {
    //Creamos un nuevo movie de tipo Movie
    const newMovie = new Movie(req.body);

    //Guardamos el movie en la base de datos y lo almacenamos en una constante para enseñarlo por la respuesta
    const createdMovie = await newMovie.save();
    return res.status(201).json(createdMovie);
  } catch (error) {
    return next(error);
  }
});

//DELETE MOVIE BY ID
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await Movie.findByIdAndDelete(id);
    return res.status(200).json("Movie deleted!");
  } catch (error) {
    return next(error);
  }
});

//EDIT MOVIE BY ID
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const movieModified = new Movie(req.body);
    //Igualamos el _id del nuevo movie al id actual para que no me lo modifique
    movieModified._id = id;
    //Encontrar por id y pararle el movie modificado
    const movieUpdated = await Movie.findByIdAndUpdate(id, movieModified);
    return res.status(200).json(movieUpdated);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;