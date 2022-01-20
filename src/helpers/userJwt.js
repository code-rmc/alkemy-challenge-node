const jwt = require("jsonwebtoken");
const config = require("../config");

const generateJwt = (id) => {
  return jwt.sign({ id }, config.auth.secret, { expiresIn: config.auth.ttl });
};

const verifyJwt = (token) => {
  return jwt.verify(token, config.auth.secret);
};

module.exports = {
  generateJwt,
  verifyJwt,
};
