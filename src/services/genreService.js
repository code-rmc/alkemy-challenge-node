const GenderRepository = require("../repositories/genreRepository");

const genreRepo = new GenderRepository();

const findAllGenres = async () => {
  return await genreRepo.getAll();
};

const findById = async (id) => {
  return await genreRepo.findById(id);
};

const createGenre = async (genre) => {
  return await genreRepo.create(genre);
};

const removeGenre = async (id) => {
  return await genreRepo.delete(id);
};

module.exports = {
  findAllGenres,
  findById,
  createGenre,
  removeGenre,
};
