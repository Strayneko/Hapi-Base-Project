import { Server } from "@hapi/hapi";
import notFoundController from "../controllers/not_found.controller";
import guestRoutes from "./guest.routes";

// route for error 404 handling
const init = (server: Server) => {
  // 404 handling
  server.route({
    method: "*",
    path: "/{any*}",
    handler: notFoundController
  });

  // call guest routes
  guestRoutes(server);
};

// export mapping
const routes = {
  init
};

export default routes;
