const { comparePass, encryptPass } = require("../helpers/encryptPass");
const { generateJwt, verifyJwt } = require("../helpers/userJwt");
const UserRepository = require("../repositories/userRepository");
const AppError = require("../errors/appError");
const { User } = require("../models/user");

const userRepo = new UserRepository();

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
 * @returns {User}
 */
const findByEmail = async (email) => {
  return await userRepo.findEmail(email);
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

    const token = generateJwt(user.id);

    return {
      token,
      name: user.userName,
    };
  } catch (error) {
    throw error;
  }
};

const validToken = async (token) => {
  try {
    // Validar que el token venga como parametro
    if (!token) {
      throw new AppError("Authentication failed! Token required", 401);
    }

    // Validar que el token sea integro
    let id;
    try {
      const userObj = await verifyJwt(token);
      id = userObj.id;
    } catch (error) {
      throw new AppError("Authentication failed! Invalid token", 401);
    }
    // Validar el usuario en la base de datos
    const user = await userRepo.getId(id);
    if (!user) {
      throw new AppError(
        "Authentication failed! Invalid token - User not found",
        401
      );
    }

    // Validar el campo estado del usuario
    if (!user.enable) {
      throw new AppError("Authentication failed! User disabled", 401);
    }

    return user;
  } catch (error) {
    throw error;
  }
};

// Validacion por rol
const validRole = (userRole, ...roles) => {
  if (!roles.includes(userRole)) {
    throw new AppError("Authorization failed! User without privileges", 403);
  }
  return true;
};

module.exports = {
  loginUser,
  register,
  findByEmail,
  validToken,
  validRole,
};
