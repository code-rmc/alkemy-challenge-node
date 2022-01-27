const express = require("express");
const {
  findAllCharacters,
  findCharacterMovies,
  saveCharacter,
  removeUser,
} = require("../services/characterService");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getCharacters = async (req, res, next) => {
  try {
    const characters = await findAllCharacters();
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
const createCharacter = async (req, res, next) => {
  try {
    const character = req.body;
    const characterSave = await saveCharacter(character);
    res.json(characterSave);
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
const getCharacterMovies = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const movies = await findCharacterMovies(id);
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
const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await removeUser(id);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCharacters,
  createCharacter,
  getCharacterMovies,
  deleteUser,
};
