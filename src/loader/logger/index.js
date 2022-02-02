const winston = require("winston");
const config = require("../../config");

const logger = winston.createLogger({
  level: config.level,
  format: winston.format.simple(),
  defaultMeta: {
    date_service: new Date().toLocaleString("es-AR", {
      timeZone: "America/Argentina/Buenos_Aires",
    }),
  },
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

module.exports = logger;
