const movieRepository = require("../repositories/movieRepository");

const movieRepo = new movieRepository();

const getMovies = async () => {
  return await movieRepo.getAll();
};

const saveMovie = async (movie) => {
  return await movieRepo.create(movie);
};

module.exports = {
  getMovies,
  saveMovie,
};
