const CharacterRepository = require("../repositories/characterRepository");

const characterRepo = new CharacterRepository();

const findAllCharacters = async () => {
  return await characterRepo.getAll();
};

const findCharacterMovies = async (id) => {
  return await characterRepo.findCharacter(id);
};

const findCharacterFilter = async (name, filter) => {
  return await characterRepo.findCharacter(id);
};

const saveCharacter = async (character) => {
  return await characterRepo.create(character);
};

const removeUser = async (id) => {
  return await characterRepo.delete(id);
};

module.exports = {
  findAllCharacters,
  findCharacterMovies,
  saveCharacter,
  removeUser,
};
