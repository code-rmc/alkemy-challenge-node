const MovieRepository = require("../repositories/movieRepository");

const movieRepo = new MovieRepository();

const findAllMovies = async () => {
  return await movieRepo.getAll();
};

const findById = async (id) => {
  return await movieRepo.findById(id);
};

const createMovie = async (movie) => {
  return await movieRepo.create(movie);
};

module.exports = {
  findAllMovies,
  findById,
  createMovie,
};
