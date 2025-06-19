import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {
  getUserByIdService,
  loginService,
  registerService,
} from "../services/user.service.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await loginService(email, password);

    const refreshToken = jwt.sign(
      { userId: user.id },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "7d",
      }
    );
    const accessToken = jwt.sign(
      { userId: user.id },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return res.status(200).json({
      message: "Giriş başarılı!",
      success: true,
      data: {
        ...user,
        token: accessToken,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};

export const register = async (req, res) => {
  const data = req.body;

  if (!data.email || !data.password) {
    return res.status(400).json({
      message: "E-posta ve şifre alanları zorunludur!",
      success: false,
    });
  }

  if (data.password.length < 6) {
    return res.status(400).json({
      message: "Şifre en az 6 karakter olmalıdır!",
      success: false,
    });
  }

  const hashedPassword = bcrypt.hashSync(data.password, 10);
  data.password = hashedPassword;

  try {
    const user = await registerService(data);
    return res.status(201).json({
      message: "Kayıt başarılı!",
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;

  if (req.user.userId !== Number(req.params.id)) {
    return res
      .status(403)
      .json({ message: "Bu veriye erişim izniniz yok.", success: false });
  }

  try {
    const user = await getUserByIdService(Number(id));

    return res.status(200).json({
      message: "Kullanıcı bilgileri başarıyla getirildi!",
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};
