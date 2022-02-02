const express = require("express");
const {
  createGenre,
  findAllGenres,
  findById,
  removeGenre,
} = require("../services/genreService");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getAllGenres = async (req, res, next) => {
  try {
    const genres = await findAllGenres();
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
const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const genre = await findById(id);
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
    const genre = req.body;
    const saveGenre = await createGenre(genre);
    res.json(saveGenre);
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
    const genre = await removeGenre(id);
    res.json(genre);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllGenres,
  getById,
  saveGenre,
  deleteGenre,
};
