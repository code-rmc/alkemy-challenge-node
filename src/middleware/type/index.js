const { check } = require("express-validator");
const { validation } = require("../common");
const AppError = require("../../errors/appError");
const { ADMIN } = require("../../constant/userRoles");
const { verifyToken, verifyrole } = require("../auth");
const { getByid } = require("../../services/typeService");

const typeRequired = check("type", "Type required").notEmpty();
// Update & Delete
const idRequired = check("id", "Id is required").notEmpty();
const idExist = check("id").custom(async (id) => {
  const type = await getByid(id);
  if (!type) {
    throw new AppError("The Id does not not exist in DB", 400);
  }
});

const postValidationType = [
  verifyToken,
  verifyrole(ADMIN),
  typeRequired,
  validation,
];

const putValidationType = [
  verifyToken,
  verifyrole(ADMIN),
  idRequired,
  idExist,
  typeRequired,
  validation,
];

const getByIdValidationType = [idRequired, idExist, validation];

const deleteValidationType = [
  verifyToken,
  verifyrole(ADMIN),
  idRequired,
  idExist,
  validation,
];

module.exports = {
  postValidationType,
  putValidationType,
  getByIdValidationType,
  deleteValidationType,
};
