const GenreRepository = require("../repositories/genreRepository");

const genreRepo = new GenreRepository();

const getAll = async () => {
  return await genreRepo.findAll();
};

const getByid = async (id) => {
  return await genreRepo.findById(id);
};

const create = async (genre) => {
  return await genreRepo.create(genre);
};

const update = async (id, genre) => {
  return await genreRepo.update(id, genre);
};

const remove = async (id) => {
  return await genreRepo.delete(id);
};

module.exports = {
  getAll,
  getByid,
  create,
  update,
  remove,
};
