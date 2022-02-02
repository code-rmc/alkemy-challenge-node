const ServerExpress = require("./loader/server");
const sequelize = require("./loader/database/connection/database");
const generateSeeds = require("./loader/database/seeders");
const logger = require("./loader/logger");

const start = async () => {
  logger.info("*******************");
  logger.info("Loading >> Server.....");
  const server = new ServerExpress();
  logger.info(">> SERVER STARTED.");
  server.start();
  logger.info("Loading >> Connection Database.....");

  try {
    await sequelize.authenticate();
    logger.info("Connection has been established successfully.");
    // await sequelize.sync({ force: false });
    // await generateSeeds(); //  Seeds
  } catch (error) {
    logger.error("Unable to connect to the database:", error);
    throw new Error(error);
  }

  logger.info(">> DB STARTED.");
  logger.info("*******************");
  logger.info("- ROUTES:");
};

start();
