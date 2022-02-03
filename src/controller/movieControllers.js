const express = require("express");
const {
  getAll,
  getByid,
  getByFilter,
  create,
  update,
  remove,
} = require("../services/movieService");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getAllMovies = async (req, res, next) => {
  try {
    const movies = await getAll();
    res.json(movies);
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
const findByMovies = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movies = await getByid(id);
    res.json(movies);
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
const findMoviesFilter = async (req, res, next) => {
  try {
    const { search, options } = req.query;
    const result = await getByFilter(search, options);
    res.json(result);
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
    const movieSave = await create(movie);
    res.json(movieSave);
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
const updateMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = req.body;
    const movieUpdate = await update(id, movie);
    res.json(movieUpdate);
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
const deleteMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await remove(id);
    res.json(movie);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllMovies,
  findByMovies,
  findMoviesFilter,
  saveMovie,
  updateMovie,
  deleteMovie,
};
