const ServerExpress = require("./loader/server");

const start = async () => {
  console.log("*******************");
  console.log("LOADING.....");
  const server = new ServerExpress();
  await server.start();
  console.log("SERVER STARTED..");
  console.log("*******************");
  console.log("- ROUTES:");
};

start();
