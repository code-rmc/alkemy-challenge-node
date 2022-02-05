const express = require("express");
const {
  getAll,
  getByid,
  getByFilter,
  create,
  update,
  remove,
} = require("../services/characterService");
const logger = require("../loader/logger");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getAllCharacters = async (req, res, next) => {
  try {
    const characters = await getAll();
    res.json(characters);
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
const findCharacterMovies = async (req, res, next) => {
  try {
    const { id } = req.params;
    const CharacterMovies = await getByid(id);
    res.json(CharacterMovies);
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
const findCharacterFilter = async (req, res, next) => {
  try {
    const { search, options = null } = req.query;
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
const saveCharacter = async (req, res, next) => {
  try {
    const character = req.body;
    const newCharacter = await create(character);
    res.json(newCharacter);
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
const updateCharacter = async (req, res, next) => {
  try {
    const { id } = req.params;
    const character = req.body;
    const characterUpdate = await update(id, character);
    res.json(characterUpdate);
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
const deleteCharacter = async (req, res, next) => {
  try {
    const { id } = req.params;
    const characterDelete = await remove(id);
    res.json(characterDelete);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCharacters,
  findCharacterMovies,
  findCharacterFilter,
  saveCharacter,
  updateCharacter,
  deleteCharacter,
};
