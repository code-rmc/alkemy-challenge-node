const CharacterRepository = require("../repositories/characterRepository");

const characterRepo = new CharacterRepository();

const getCharacter = async () => {
  return await characterRepo.getAll();
};

const saveCharacter = async (character) => {
  return await characterRepo.create(character);
};

module.exports = {
  getCharacter,
  saveCharacter,
};
