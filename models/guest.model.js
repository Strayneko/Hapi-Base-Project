import prisma from "../database/connection.js";

const getAllGuest = async () => {
  return await prisma.guests.findMany();
};

const guestModel = {
  getAllGuest,
};
export default guestModel;
