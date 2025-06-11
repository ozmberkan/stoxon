import { prisma } from "../prisma/prisma.js";

export const getAllUsers = async () => {
  return await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      phone: true,
      fullName: true,
      createdAt: true,
      updatedAt: true,
      authenticator: true,
      notification: true,
    },
  });
};

export const getUserById = async (id) => {
  return await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      phone: true,
      fullName: true,
      createdAt: true,
      updatedAt: true,
      authenticator: true,
      notification: true,
    },
  });
};

export const updateUser = async (id, data) => {
  return await prisma.user.update({
    where: { id },
    data,
    select: {
      id: true,
      email: true,
      phone: true,
      fullName: true,
      createdAt: true,
      updatedAt: true,
      authenticator: true,
      notification: true,
    },
  });
};

export const deleteUser = async (id) => {
  return await prisma.user.delete({
    where: { id },
    select: {
      id: true,
      email: true,
      phone: true,
      fullName: true,
      createdAt: true,
      updatedAt: true,
      authenticator: true,
      notification: true,
    },
  });
};

export const getMyInfo = async (email) => {
  return await prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      email: true,
      phone: true,
      fullName: true,
      createdAt: true,
      updatedAt: true,
      authenticator: true,
      notification: true,
      is2FAVerified: true,
    },
  });
};
