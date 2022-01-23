const config = require("../../../config");

module.exports = {
  /*development: {
    username: config.db.user,
    password: config.db.pass,
    database: config.db.name + "database_development",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: config.db.user,
    password: config.db.pass,
    database: config.db.name + "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },*/
  production: {
    username: config.db.user,
    password: config.db.pass,
    database: config.db.name + "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
