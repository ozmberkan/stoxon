import { api } from "~/axios/axios";

export const getClaimsByUser = async (userId) => {
  return await api.get(`/claims/user/${userId}`);
};

export const assignClaimToUser = async (userId, claimName) => {
  return await api.post(`/claims/assign`, {
    userId,
    claimName,
  });
};
