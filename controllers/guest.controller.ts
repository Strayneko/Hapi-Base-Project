import guestModel from "../models/guest.model";
import response from "../response/response";
import { Request, ResponseToolkit } from "@hapi/hapi";

// controller to get all guest
const index = async (request: Request, h: ResponseToolkit) => {
  // get guest data
  const guests = await guestModel.getAllGuest();

  // return response
  const resp = response.success(guests);
  return h.response(resp);
};

const guestController = {
  index
};

export default guestController;
