import guestController from "../controllers/guest.controller.js";

const guestRoutes = server => {
  server.route({
    method: "GET",
    path: "/guest/all",
    handler: guestController.index,
  });
};

export default guestRoutes;
