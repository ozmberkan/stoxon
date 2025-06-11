import { prisma } from "../prisma/prisma.js";

export const loginRepo = async (email) => {
  return await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
};

export const registerRepo = async (data) => {
  return await prisma.user.create({
    data,
  });
};
