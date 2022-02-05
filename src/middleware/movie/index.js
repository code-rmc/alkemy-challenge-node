const { check } = require("express-validator");
const { validation } = require("../common");
const { ADMIN } = require("../../constant/userRoles");
const { verifyToken, verifyrole } = require("../auth");
const {
  validGenresExist,
  validIdExist,
  validIdTypeExist,
} = require("./validMovie");

const titleRequired = check("title", "Title required")
  .notEmpty()
  .trim()
  .escape();
const pictureRequired = check("picture", "Picture required").notEmpty();
const scoreRequired = check("score", "Score required").notEmpty();
const scoreValid = check("score", "Score must be decimal").isNumeric({
  min: 0,
  max: 5,
});
const creationDateRequired = check(
  "creation_date",
  "Creation Date is required a valid date"
)
  .notEmpty()
  .isDate();
const idTypeRequired = check("idType", "Type required").notEmpty();
const idTypeExist = check("idType").isNumeric().custom(validIdTypeExist);
const genresRequired = check("genres", "Genre required").notEmpty();
const genresExist = check("genres").isNumeric().custom(validGenresExist);

// Search
const nameRequiredQuery = check("search.name", "Name required").notEmpty();

// Update & Delete
const idRequired = check("id", "Id is required").notEmpty();
const idExist = check("id").isNumeric().custom(validIdExist);
const idTypeExistOptional = check("idType")
  .optional()
  .isNumeric()
  .custom(validIdTypeExist);
const genresExistOptional = check("genres")
  .optional()
  .isNumeric()
  .custom(validGenresExist);
const scoreValidOptional = check("score", "Score must be decimal")
  .optional()
  .isNumeric({ min: 0, max: 5 });

const postValidationMovie = [
  verifyToken,
  verifyrole(ADMIN),
  titleRequired,
  pictureRequired,
  scoreRequired,
  scoreValid,
  creationDateRequired,
  idTypeRequired,
  idTypeExist,
  genresRequired,
  genresExist,
  validation,
];

const putValidationMovie = [
  verifyToken,
  verifyrole(ADMIN),
  idRequired,
  idExist,
  idTypeExistOptional,
  genresExistOptional,
  scoreValidOptional,
  validation,
];

const getByIdValidationMovie = [idRequired, idExist, validation];

const getByFilterValidationMovie = [nameRequiredQuery, validation];

const deleteValidationMovie = [
  verifyToken,
  verifyrole(ADMIN),
  idRequired,
  idExist,
  validation,
];

module.exports = {
  postValidationMovie,
  putValidationMovie,
  getByIdValidationMovie,
  getByFilterValidationMovie,
  deleteValidationMovie,
};
