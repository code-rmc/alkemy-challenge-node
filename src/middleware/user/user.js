const { check } = require("express-validator");
const { findByEmail } = require("../../services/authUser");
const AppError = require("../../errors/appError");
const { validation } = require("../common");

const nameRequired = check("userName", "Name required").not().isEmpty().trim();
const emailRequired = check("email", "Email required").notEmpty().trim();
const emailValid = check("email", "Email is invalid").isEmail();
const emailExist = check("email").custom(async (email) => {
  const result = await findByEmail(email);
  if (result) {
    throw new AppError("Email already exist in DB", 400);
  }
});
const passwordRequired = check("password", "Password required")
  .notEmpty()
  .isLength({ min: 5 })
  .withMessage("must be at least 5 chars long");

const createUser = [
  nameRequired,
  emailRequired,
  emailValid,
  emailExist,
  passwordRequired,
  validation,
];

const loginUser = [emailRequired, emailValid, passwordRequired, validation];

module.exports = { createUser, loginUser };
