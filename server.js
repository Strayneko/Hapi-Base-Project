"use strict";

import Hapi from "@hapi/hapi";
import config from "./config/config.js";
import routes from "./routes/index.js";

const init = async () => {
  const server = Hapi.server({
    port: config.SERVER_PORT,
    host: config.SERVER_HOST,
  });

  //   init routes
  routes.init(server);
  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
