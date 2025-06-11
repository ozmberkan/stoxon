import { prisma } from "../prisma/prisma.js";

export const createClaim = async (name) => {
  return await prisma.claim.create({
    data: { name },
  });
};

export const getAllClaims = async () => {
  return await prisma.claim.findMany({
    select: {
      id: true,
      name: true,
    },
  });
};

export const assignClaimToUser = async (userId, claimName) => {
  return await prisma.claim.update({
    where: { name: claimName },
    data: {
      users: {
        connect: { id: userId },
      },
    },
  });
};

export const getClaimsByUserId = async (userId) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      claims: {
        select: { name: true },
      },
    },
  });

  return user?.claims.map((claim) => claim.name) || [];
};
