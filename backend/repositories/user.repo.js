import { prisma } from "../prisma/prisma.js";

export const login = async (email) => {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
};

export const register = async (data) => {
  return prisma.user.create({
    data: data,
  });
};

export const getUserById = async (id) => {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
};
