const ServerExpress = require("./loader/server");
const conectionTest = require("./loader/db");
const start = async () => {
  console.log("*******************");
  console.log("LOADING.....");
  await conectionTest();
  const server = new ServerExpress();
  await server.start();
  console.log("SERVER STARTED..");
  console.log("*******************");
  console.log("- ROUTES:");
};

start();
