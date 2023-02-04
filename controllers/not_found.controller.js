import response from "../response/response.js";

const notFoundController = (request, h) => {
  const resp = response.error({ message: "Path Not Found!", status_code: 404 });
  return h.response(resp).code(404);
};

export default notFoundController;
