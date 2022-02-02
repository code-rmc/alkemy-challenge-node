const { check } = require("express-validator");
const { validation } = require("../common");
const AppError = require("../../errors/appError");
const { ROLES, ADMIN } = require("../../constant/userRoles");
const { verifyToken, verifyrole } = require("../auth");
const { findCharacterMovies } = require("../../services/characterService");

const nameRequired = check("name", "Name required").notEmpty();
const pictureRequired = check("picture", "Picture required").notEmpty();
const weightTypeValid = check("weight", "weight is invalid").isDecimal();
const rolValid = check("role", "Role is invalid").optional().isIn(ROLES);
// Update & Delete
const idRequired = check("id", "Id is required").notEmpty();
const idExist = check("id").custom(async (id) => {
  const character = await findCharacterMovies(id);
  if (!character) {
    throw new AppError("The Id does not not exist in DB", 400);
  }
});

const postValidationCharacter = [
  verifyToken,
  verifyrole(ADMIN),
  rolValid,
  nameRequired,
  pictureRequired,
  weightTypeValid,
  validation,
];

const putValidationCharacter = [
  verifyToken,
  verifyrole(ADMIN),
  idRequired,
  idExist,
  validation,
];
const deleteValidationCharacter = [
  verifyToken,
  verifyrole(ADMIN),
  idRequired,
  idExist,
  validation,
];

module.exports = {
  postValidationCharacter,
  deleteValidationCharacter,
};
