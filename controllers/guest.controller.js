import guestModel from "../models/guest.model.js";
import response from "../response/response.js";

const index = async (request, h) => {
  const guests = await guestModel.getAllGuest();
  const resp = response.success({ data: guests });
  return h.response(resp);
};

const guestController = {
  index,
};

export default guestController;
