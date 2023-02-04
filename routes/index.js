import notFoundController from "../controllers/not_found.controller.js";
import guestRoutes from "./guest.routes.js";

const init = server => {
  // 404 handling
  server.route({
    method: "*",
    path: "/{any*}",
    handler: notFoundController,
  });

  guestRoutes(server);
};

const routes = {
  init,
};

export default routes;
