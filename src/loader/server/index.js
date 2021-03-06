const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const config = require("../../config");
const swaggerDocument = require("../swagger/swagger.json");
const logger = require("../logger");

class ServerExpress {
  constructor() {
    this.app = express();
    this.basePathAuth = `${config.api.prefix}auth`;
    this.basePathCharacter = `${config.api.prefix}character`;
    this.basePathMovie = `${config.api.prefix}movie`;
    this.basePathType = `${config.api.prefix}type`;
    this.basePathGenre = `${config.api.prefix}genre`;
    this.port = config.port;

    this._middleware();
    this._swaggerConfig();
    this._routes();
    this._notFound();
    this._handlerError();
  }

  _middleware() {
    this.app.use(cors({ origin: "*" }));
    this.app.use(morgan("tiny"));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  _routes() {
    this.app.head("/status", (req, res) => res.status(200).end());
    this.app.use(this.basePathAuth, require("../../routes/users"));
    this.app.use(this.basePathCharacter, require("../../routes/characters"));
    this.app.use(this.basePathMovie, require("../../routes/movie"));
    this.app.use(this.basePathType, require("../../routes/type"));
    this.app.use(this.basePathGenre, require("../../routes/genre"));
  }

  _swaggerConfig() {
    this.app.use(
      config.swagger.path,
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument)
    );
  }

  _notFound() {
    this.app.use((req, res, next) => {
      const error = new Error("Not Found");
      error.code = 404;
      next(error);
    });
  }

  _handlerError() {
    this.app.use((err, req, res, next) => {
      const code = err.code || 500;
      logger.warn("************> ERROR " + err.message);
      const body = {
        error: {
          code,
          message: err.message,
          detail: err.data,
        },
      };
      res.status(code).json(body);
    });
  }

  start() {
    this.app.listen(this.port, (err) => {
      if (err) {
        process.exit(1);
      }
    });
  }
}

module.exports = ServerExpress;
