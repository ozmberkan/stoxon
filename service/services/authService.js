import { loginRepo, registerRepo } from "../repositories/authRepo.js";

export const loginService = async (email) => {
  return await loginRepo(email);
};

export const registerService = async (data) => {
  return await registerRepo(data);
};
