const {
  getMovies: getMoviesService,
  saveMovie: saveMovieService,
} = require("../services/movieService");

const getMovies = async (req, res, next) => {
  try {
    res.json(await getMoviesService());
  } catch (error) {
    next(error);
  }
};

const saveMovie = async (req, res, next) => {
  try {
    const movie = req.body;
    const movieSave = await saveMovieService(movie);
    res.json(movieSave);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getMovies,
  saveMovie,
};
