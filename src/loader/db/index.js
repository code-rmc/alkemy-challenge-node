const sequelize = require("sequelize");
const config = require("../../config");

const db = new sequelize(config.db.name, config.db.user, config.db.pass, {
  host: "localhost",
  dialect: mysql,
});

const conectionTest = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    throw error;
  }
};

module.exports = conectionTest;
