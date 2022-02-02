const MovieRepository = require("../repositories/movieRepository");

const movieRepo = new MovieRepository();

const getAll = async () => {
  return await movieRepo.findAll();
};

const getByid = async (id) => {
  return await movieRepo.findById(id);
};

const create = async (movie) => {
  return await movieRepo.create(movie);
};

const update = async (id, movie) => {
  return await movieRepo.update(id, movie);
};

const remove = async (id) => {
  return await movieRepo.delete(id);
};

module.exports = {
  getAll,
  getByid,
  create,
  update,
  remove,
};
