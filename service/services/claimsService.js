import {
  assignClaimToUser as assignClaimToUserRepo,
  createClaim as createClaimRepo,
  getAllClaims as getAllClaimsRepo,
  getClaimsByUserId as getClaimsByUserIdRepo,
} from "../repositories/claimsRepo.js";

export const createClaim = async (name) => {
  const allClaims = await getAllClaimsRepo();
  const exists = allClaims.find((c) => c.name === name);

  if (exists) {
    throw new Error("Bu isimde bir claim zaten mevcut.");
  }

  return await createClaimRepo(name);
};

export const assignClaimToUser = async (userId, claimName) => {
  return await assignClaimToUserRepo(userId, claimName);
};

export const getClaimsByUserId = async (userId) => {
  return await getClaimsByUserIdRepo(userId);
};

export const getAllClaims = async () => {
  return await getAllClaimsRepo();
};
