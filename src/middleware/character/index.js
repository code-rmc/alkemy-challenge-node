const { check } = require("express-validator");
const { validation } = require("../common");
const AppError = require("../../errors/appError");
const { ADMIN } = require("../../constant/userRoles");
const { verifyToken, verifyrole } = require("../auth");
const { getByid } = require("../../services/characterService");

const nameRequired = check("name", "Name required").notEmpty();
const pictureRequired = check("picture", "Picture required").notEmpty();
const weightTypeValid = check("weight", "weight is invalid").isNumeric();
// Search
const nameRequiredQuery = check("search.name", "Name required").notEmpty();
// Update & Delete
const weightTypeValidOptional = check("weight", "weight is invalid")
  .optional()
  .isNumeric();
const idRequired = check("id", "Id is required").notEmpty();
const idExist = check("id")
  .isNumeric()
  .custom(async (id) => {
    const character = await getByid(id);
    if (!character) {
      throw new AppError("The Id does not not exist in DB", 400);
    }
  });

const postValidationCharacter = [
  verifyToken,
  verifyrole(ADMIN),
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
  weightTypeValidOptional,
  validation,
];

const getByIdValidationCharacter = [idRequired, idExist, validation];

const getByFilterValidationCharacter = [nameRequiredQuery, validation];

const deleteValidationCharacter = [
  verifyToken,
  verifyrole(ADMIN),
  idRequired,
  idExist,
  validation,
];

module.exports = {
  postValidationCharacter,
  getByFilterValidationCharacter,
  getByIdValidationCharacter,
  putValidationCharacter,
  deleteValidationCharacter,
};
