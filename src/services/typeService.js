const TypeRepository = require("../repositories/typeRepository");

const typeRepo = new TypeRepository();

const getAll = async () => {
  return await typeRepo.findAll();
};

const getByid = async (id) => {
  return await typeRepo.findById(id);
};

const create = async (type) => {
  return await typeRepo.create(type);
};

const update = async (id, type) => {
  return await typeRepo.update(id, type);
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
