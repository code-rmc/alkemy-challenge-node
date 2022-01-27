const { validToken, validRole } = require("../../services/authUser");
module.exports = {
  verifyToken: async (req, res, next) => {
    try {
      const jwt = req.header("Authorization");
      const user = await validToken(jwt);
      req.user = user.dataValues;
      next();
    } catch (error) {
      next(error);
    }
  },
  verifyrole: (roles) => {
    return (req, res, next) => {
      try {
        const user = req.user;
        validRole(user.role, ...roles);
        next();
      } catch (error) {
        next(error);
      }
    };
  },
};
