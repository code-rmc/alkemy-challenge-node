const { Request, Response } = require("express");
const {
  getCharacter: getCharacterServices,
  saveCharacter,
} = require("../services/characterService");

const getCharacter = async (req = Request, res = Response, next) => {
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

module.exports = {
  getCharacter,
  createCharacter,
};
