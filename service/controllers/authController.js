import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { loginService, registerService } from "../services/authService.js";

export const loginController = async (req, res) => {
  try {
    const user = await loginService(req.body.email);
    if (!user) {
      return res
        .status(404)
        .json({ message: "Kullanıcı bulunamadı!", success: false });
    }

    const isPasswordValid = bcryptjs.compareSync(
      req.body.password,
      user.password
    );
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: "Geçersiz şifre!", success: false });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    const { password, ...userData } = user;

    res.status(200).json({
      message: "Giriş Başarılı",
      data: userData,
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

export const registerController = async (req, res) => {
  const { fullName, phone, email, password } = req.body;

  const hashedPassword = bcryptjs.hashSync(password, 10);

  try {
    const user = await registerService({
      fullName,
      phone,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    if (!user) {
      return res.status(400).json({
        message: "Kullanıcı oluşturma hata ile sonuçlandı",
        success: false,
      });
    }

    const { password, ...userData } = user;

    res.status(201).json({
      message: "Kayıt Başarılı",
      data: userData,
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

export const logoutController = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "Çıkış Başarılı", success: true });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};
