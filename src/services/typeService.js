const TypeRepository = require("../repositories/typeRepository");

const typeRepo = new TypeRepository();

const getAll = async () => {
  return await typeRepo.findAll();
};

const getByid = async (id) => {
  return await typeRepo.findById(id);
};

const create = async (character) => {
  return await typeRepo.create(character);
};

const update = async (id, character) => {
  return await typeRepo.update(id, character);
};

const remove = async (id) => {
  return await typeRepo.delete(id);
};

module.exports = {
  getAll,
  getByid,
  create,
  update,
  remove,
};
