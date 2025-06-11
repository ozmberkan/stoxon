import { api } from "~/axios/axios";

export const login = async (data) => {
  return await api.post("/auth/login", data);
};
export const register = async (data) => {
  return await api.post("/auth/register", data);
};
export const logout = async () => {
  return await api.post("/auth/logout");
};
