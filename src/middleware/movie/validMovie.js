const AppError = require("../../errors/appError");
const { getByid: getByidMovie } = require("../../services/movieService");
const { getByid: getByIdType } = require("../../services/typeService");
const { getByid: getByIdGenre } = require("../../services/genreService");

const validGenresExist = async (id) => {
  for (const value of id) {
    const genre = await getByIdGenre(value);
    if (!genre) {
      throw new AppError("The Id of genre does not not exist in DB", 400);
    }
  }
};

const validIdExist = async (id) => {
  const movie = await getByidMovie(id);
  if (!movie) {
    throw new AppError("The Id does not not exist in DB", 400);
  }
};

const validIdTypeExist = async (id) => {
  const type = await getByIdType(id);
  if (!type) {
    throw new AppError("The Id of type does not not exist in DB", 400);
  }
};

module.exports = {
  validGenresExist,
  validIdExist,
  validIdTypeExist,
};
