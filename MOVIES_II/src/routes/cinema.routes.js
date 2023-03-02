const express = require("express");
const Cinema = require("../models/cinema.model");

const router = express.Router();

//GET ALL CINEMAS
router.get("/", async (req, res, next) => {
  try {
    const cinemas = await Cinema.find().populate("movies");
    return res.status(200).json(cinemas);
  } catch (error) {
    return next(error);
  }
});

//CREATE CINEMA
router.post("/", async (req, res, next) => {
  try {
    const newCinema = new Cinema(req.body);
    const createdCinema = await newCinema.save();
    return res.status(201).json(createdCinema);
  } catch (error) {
    return next(error);
  }
});

//DELETE CINEMA
router.delete("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      await Cinema.findByIdAndDelete(id);
      return res.status(200).json("Cinema deleted!");
    } catch (error) {
      return next(error);
    }
  });
  
  //EDIT CINEMA
  router.put("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const cinemaModified = new Cinema(req.body);
      //Igualamos el _id del nuevo cine al id actual para que no me lo modifique
      cinemaModified._id = id;
      //Encontrar por id y pararle el cine modificado
      const cinemaUpdated = await Cinema.findByIdAndUpdate(id, cinemaModified);
      return res.status(200).json(cinemaUpdated);
    } catch (error) {
      return next(error);
    }
  });

//PUSH MOVIE IN CINEMA
router.put("/add-movie", async (req, res, next) => {
    try {
      const { MovieId } = req.body;
      const { CinemaId } = req.body;
      const updatedCinema = await Cinema.findByIdAndUpdate(
        CinemaId,
        { $push: { movies: MovieId } },
        { new: true }
      );
      return res.status(200).json(updatedCinema);
    } catch (error) {
      return next(error);
    }
  });
  

module.exports = router;