import guestController from "../controllers/guest.controller";
import { Server } from "@hapi/hapi";

// routes for /guest
const guestRoutes = (server: Server) => {
  // get all guest
  server.route({
    method: "GET",
    path: "/guest/all",
    handler: guestController.index
  });
};

export default guestRoutes;
