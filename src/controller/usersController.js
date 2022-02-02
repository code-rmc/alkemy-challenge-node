const { Request, Response } = require("express");
const { loginUser, register } = require("../services/authUser");

const loginController = async (req = Request, res = Response, next) => {
  try {
    const { email, password } = req.body;
    const userToken = await loginUser(email, password);
    res.json(userToken);
  } catch (error) {
    next(error);
  }
};

const registerController = async (req = Request, res = Response, next) => {
  try {
    const user = req.body;
    const usertest = await register(user);
    res.json({ usertest });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginController,
  registerController,
};
