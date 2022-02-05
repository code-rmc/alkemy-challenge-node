const { comparePass, encryptPass } = require("../helpers/encryptPass");
const { generateJwt } = require("../helpers/userJwt");
const UserRepository = require("../repositories/userRepository");
const AppError = require("../errors/appError");
const User = require("../models/user");

const userRepo = new UserRepository();

/**
 *
 * @param {number} id
 * @returns {User}
 */
const userFindById = async (id) => {
  return await userRepo.findById(id);
};

/**
 *
 * @param {String} email
 * @returns {User}
 */
const findByEmail = async (email) => {
  return await userRepo.findEmail(email);
};

/**
 *
 * @param {User} user
 */
const register = async (user) => {
  user.password = await encryptPass(user.password);
  return userRepo.create(user);
};

/**
 *
 * @param {String} email
 * @param {String} password
 * @returns {String, String}
 */
const loginUser = async (email, password) => {
  try {
    const user = await findByEmail(email);

    if (!user) {
      throw new AppError(
        "Authenticaction failed Email / Password does not correct.",
        401
      );
    }

    const compare = await comparePass(password, user.password);

    if (!compare) {
      throw new AppError(
        "Authenticaction failed Email / Password does not correct. password",
        401
      );
    }

    const token = await generateJwt(user.id);

    return {
      token,
      name: user.userName,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  register,
  loginUser,
  findByEmail,
  userFindById,
};
