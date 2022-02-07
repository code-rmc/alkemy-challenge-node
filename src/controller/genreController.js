const express = require("express");
const {
  getAll,
  getByid,
  create,
  update,
  remove,
} = require("../services/genreService");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getAllGenres = async (req, res, next) => {
  try {
    const genres = await getAll();
    res.json(genres);
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
const findByGenre = async (req, res, next) => {
  try {
    const { id } = req.params;
    const genre = await getByid(id);
    res.json(genre);
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
const saveGenre = async (req, res, next) => {
  try {
    const Genre = req.body;
    const newGenre = await create(Genre);
    res.status(201).json(newGenre);
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
const updateGenre = async (req, res, next) => {
  try {
    const { id } = req.params;
    const Genre = req.body;
    const GenreUpdate = await update(id, Genre);
    res.json(GenreUpdate);
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
const deleteGenre = async (req, res, next) => {
  try {
    const { id } = req.params;
    const GenreDelete = await remove(id);
    res.json(GenreDelete);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllGenres,
  findByGenre,
  saveGenre,
  updateGenre,
  deleteGenre,
};
