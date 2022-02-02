const dotenv = require("dotenv");

const envFound = dotenv.config();

if (!envFound) {
  throw new Error("Couldn't find .env file.");
}

process.env.NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
  level: process.env.LOGGER,
  port: process.env.PORT,
  api: {
    prefix: "/api/",
  },
  auth: {
    secret: process.env.SECRET,
    ttl: process.env.TTL,
  },
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
  },
};
