import { api } from "~/axios/axios";

export const getAllUsers = async (data) => {
  return await api.get("/user/getAllUsers", data);
};
export const getById = async (id) => {
  return await api.get("/user/getById" + id, data);
};
export const getMyInfo = async () => {
  return await api.get("/user/getMyInfo");
};
export const update = async (id, data) => {
  return await api.put("/user/update/" + id, data);
};
export const remove = async (id) => {
  return await api.delete("/user/delete" + id);
};
