import { Request, ResponseToolkit } from "@hapi/hapi";
import response from "../response/response";

// controller for 404 error handling
const notFoundController = (request: Request, h: ResponseToolkit) => {
  const resp = response.error("Path Not Found!", 404);
  return h.response(resp).code(404);
};

export default notFoundController;
