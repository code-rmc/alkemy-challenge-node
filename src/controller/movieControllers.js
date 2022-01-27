const express = require("express");
const {
  findAllMovies,
  findById,
  createMovie,
} = require("../services/movieService");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getAllMovies = async (req, res, next) => {
  try {
    res.json(await findAllMovies());
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await findById(id);
    res.json(movie);
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const saveMovie = async (req, res, next) => {
  try {
    const movie = req.body;
    const movieSave = await createMovie(movie);
    res.json(movieSave);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllMovies,
  getMovie,
  saveMovie,
};
