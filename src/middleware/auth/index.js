const { userFindById } = require("../../services/authUser");
const { verifyJwt } = require("../../helpers/userJwt");
const AppError = require("../../errors/appError");

const validToken = async (token) => {
  try {
    // Validar que el token venga como parametro
    if (!token) {
      throw new AppError("Authentication failed! Token required", 401);
    }

    // Validar que el token sea integro
    let id;
    try {
      const obj = await verifyJwt(token);
      id = obj.id;
    } catch (error) {
      throw new AppError("Authentication failed! Invalid token", 401);
    }

    // Validar el usuario en la base de datos
    const user = await userFindById(id);
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

const validRole = (userRole, roles) => {
  if (!roles.includes(userRole)) {
    throw new AppError("Authorization failed! User without privileges", 403);
  }
  return true;
};

module.exports = {
  verifyToken: async (req, res, next) => {
    try {
      let jwt = req.header("Authorization");
      if (!jwt)
        throw new AppError("Authentication failed! Token required", 401);
      jwt = jwt.search("Bearer")
        ? req.header("Authorization")
        : req.header("Authorization").split("Bearer ")[1];
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
