const express = require("express");
const morgan = require("morgan");
const config = require("../../config");
const logger = require("../logger");

class ServerExpress {
  constructor() {
    this.app = express();
    this.basePath = `${config.api.prefix}`;
    this.basePathCharacter = `${config.api.prefix}character`;
    this.basePathMovie = `${config.api.prefix}movie`;
    this.basePathGenre = `${config.api.prefix}genre`;
    this.port = config.port;

    // Agregar cors - winston - swagger
    this._middleware();
    this._routes();
    this._notFound();
    this._handlerError();
  }

  _middleware() {
    this.app.use(morgan("tiny"));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  _routes() {
    this.app.use(`${this.basePath}auth`, require("../../routes/users"));
    this.app.use(
      `${this.basePath}character`,
      require("../../routes/characters")
    );
    this.app.use(`${this.basePath}movie`, require("../../routes/movie"));
    this.app.use(`${this.basePath}type`, require("../../routes/type"));
    this.app.use(`${this.basePath}genre`, require("../../routes/genre"));
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
