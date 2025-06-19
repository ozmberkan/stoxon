import { login, register, getUserById } from "../repositories/user.repo.js";
import bcryptjs from "bcryptjs";

export const loginService = async (email, password) => {
  const user = await login(email);

  if (!email || !password) {
    throw new Error("E-posta ve şifre alanları boş bırakılamaz!");
  }

  if (!user) {
    throw new Error("Kullanıcı bulunamadı!");
  }

  if (!bcryptjs.compareSync(password, user.password)) {
    throw new Error("Girilen bilgiler doğru değil!");
  }

  return user;
};

export const registerService = async (data) => {
  const existingUser = await login(data.email);

  if (!data.email || !data.password || !data.fullName) {
    throw new Error("E-posta, şifre ve tam ad alanları boş bırakılamaz!");
  }

  if (existingUser) {
    throw new Error("Bu e-posta adresi zaten kayıtlı!");
  }

  data.password = bcryptjs.hashSync(data.password, 10);
  return register(data);
};

export const getUserByIdService = async (id) => {
  const user = await getUserById(id);

  if (!user) {
    throw new Error("Kullanıcı bulunamadı!");
  }

  return user;
};
