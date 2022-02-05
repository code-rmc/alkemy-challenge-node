const CharacterRepository = require("../repositories/characterRepository");

const characterRepo = new CharacterRepository();

const getAll = async () => {
  return await characterRepo.findAll();
};

const getByid = async (id) => {
  return await characterRepo.findById(id);
};

const getByFilter = async (search, options) => {
  return await characterRepo.findByFilter(search, options);
};

const create = async (character) => {
  return await characterRepo.create(character);
};

const update = async (id, character) => {
  return await characterRepo.update(id, character);
};

const remove = async (id) => {
  return await characterRepo.delete(id);
};

module.exports = {
  getAll,
  getByid,
  getByFilter,
  create,
  update,
  remove,
};
