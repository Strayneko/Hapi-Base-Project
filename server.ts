"use strict";

import Hapi, { Server } from "@hapi/hapi";
import config from "./config/config";
import routes from "./routes/index";

const init = async () => {
  const server: Server = Hapi.server({
    port: config.SERVER_PORT,
    host: config.SERVER_HOST
  });

  //   init routes
  routes.init(server);
  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
