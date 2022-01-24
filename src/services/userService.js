const UserRepository = require("../repositories/userRepository");
const { encryptPass } = require("../helpers/encryptPass");
const { checkUser } = require("./authUser");
const { User } = require("../models/user");

const userRepo = new UserRepository();

/**
 *
 * @param {String} email
 * @param {String} password
 * @returns {String, String}
 */
const login = async (email, password) => {
  return await checkUser(email, password);
};

/**
 *
 * @param {User} user
 */
const register = async (user) => {
  user.password = await encryptPass(user.password);
  return userRepo.create(user);
};

module.exports = {
  login,
  register,
};
