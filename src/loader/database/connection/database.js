const config = require("../../../config");

module.exports = {
  development: {
    username: config.db.user,
    password: config.db.pass,
    database: config.db.name,
    host: config.db.host,
    port: config.db.port,
    dialect: "mysql",
  },
  /*test: {
    username: config.db.user,
    password: config.db.pass,
    database: config.db.name,
    host: config.db.host,
    port: config.db.port,
    dialect: "mysql",
  },*/
  production: {
    username: config.db.user,
    password: config.db.pass,
    database: config.db.name,
    host: config.db.host,
    port: config.db.port,
    dialect: "mysql",
  },
};
