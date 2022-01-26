const { Request, Response } = require("express");
const {
  getCharacter: getCharacterServices,
  findCharacterMovies: findCharacterMoviesServices,
  saveCharacter,
} = require("../services/characterService");

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @param {} next
 */
const getCharacter = async (req, res, next) => {
  try {
    const characters = await getCharacterServices();
    res.json(characters);
  } catch (error) {
    next(error);
  }
};

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
 * @param {Request} req
 * @param {Response} res
 * @param {} next
 */
const findCharacterMovies = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const movies = await findCharacterMoviesServices(id);
    res.json(movies);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCharacter,
  createCharacter,
  findCharacterMovies,
};
