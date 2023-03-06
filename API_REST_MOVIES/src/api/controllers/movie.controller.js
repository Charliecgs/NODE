const Movie = require("../models/movie.model");

async function retrieveAllMovies(req, res, next) {
  try {
    const movies = await Movie.find().populate("actors");
    res.status(200).json(movies);
  } catch (error) {
    return next(error);
  }
}

async function retrieveMovieById(req, res, next) {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id).populate("actors");
    res.status(200).json(movie);
  } catch (error) {
    return next(error);
  }
}

async function createMovie(req, res, next) {
  try {
    const movie = new Movie(req.body);
    const movieDB = await movie.save();
    res.status(201).json(movieDB);
  } catch (error) {
    return next(error);
  }
}

async function updateMovieById(req, res, next) {
  try {
    const { id } = req.params;
    const updateMovie = await Movie.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateMovie);
  } catch (error) {
    return next(error);
  }
}

async function deleteMovieById(req, res, next) {
  try {
    const { id } = req.params;
    const movie = await Movie.findByIdAndDelete(id);
    res.status(200).json(movie);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  retrieveAllMovies,
  retrieveMovieById,
  createMovie,
  updateMovieById,
  deleteMovieById,
};
