import prisma from "../database/connection";
import { PrismaClient, Prisma } from "@prisma/client";

// get all guest
const getAllGuest = async () => {
  return await prisma.guests.findMany();
};

const guestModel = {
  getAllGuest
};
export default guestModel;
