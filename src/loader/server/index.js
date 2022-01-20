const express = require("express");
const morgan = require("morgan");
const config = require("../../config");

class ServerExpress {
  constructor() {
    this.app = express();
    this.basePathCharacter = `${config.api.prefix}character`;
    this.port = config.port;

    // Agregar cors - winston - swagger
    this._middleware();
    this._routes();
    this._notFound();
    this._handlerError();
  }

  _middleware() {
    this.app.use(morgan("tiny"));
  }

  _routes() {
    this.app.use(this.basePathCharacter, require("../../routes/characters"));
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
      console.log("************----ERROR " + err.message);
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
