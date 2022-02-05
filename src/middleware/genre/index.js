const { check } = require("express-validator");
const { validation } = require("../common");
const AppError = require("../../errors/appError");
const { ADMIN } = require("../../constant/userRoles");
const { verifyToken, verifyrole } = require("../auth");
const { getByid } = require("../../services/genreService");

const genreRequired = check("genre", "Genre required").notEmpty();
// Update & Delete
const idRequired = check("id", "Id is required").notEmpty();
const idExist = check("id").custom(async (id) => {
  const genre = await getByid(id);
  if (!genre) {
    throw new AppError("The Id does not not exist in DB", 400);
  }
});

const postValidationGenre = [
  verifyToken,
  verifyrole(ADMIN),
  genreRequired,
  validation,
];

const putValidationGenre = [
  verifyToken,
  verifyrole(ADMIN),
  idRequired,
  idExist,
  genreRequired,
  validation,
];

const getByIdValidationGenre = [idRequired, idExist, validation];

const deleteValidationGenre = [
  verifyToken,
  verifyrole(ADMIN),
  idRequired,
  idExist,
  validation,
];

module.exports = {
  postValidationGenre,
  putValidationGenre,
  getByIdValidationGenre,
  deleteValidationGenre,
};
