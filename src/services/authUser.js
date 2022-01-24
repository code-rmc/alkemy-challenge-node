const { comparePass } = require("../helpers/encryptPass");
const { generateJwt, verifyJwt } = require("../helpers/userJwt");
const AppError = require("../errors/appError");
const UserRepository = require("../repositories/userRepository");

const userRepo = new UserRepository();

/**
 *
 * @param {String} email
 * @param {String} password
 * @returns {String, String}
 */
const checkUser = async (email, password) => {
  try {
    const user = await userRepo.findEmail(email);

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

    const token = generateJwt(user.id);

    return {
      token,
      name: user.userName,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  checkUser,
};
