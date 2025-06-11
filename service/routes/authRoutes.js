import {
  loginController,
  registerController,
  logoutController,
  setup2FA,
} from "../controllers/authController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import { prisma } from "../prisma/prisma.js";
import speakeasy from "speakeasy";

import express from "express";
const router = express.Router();

router.post("/login", loginController);
router.post("/register", registerController);
router.post("/logout", verifyToken, logoutController);
router.post("/setup-2fa", verifyToken, setup2FA);
router.post("/verify-2fa", verifyToken, async (req, res) => {
  const { token } = req.body;
  const userId = req.user.id;

  const user = await prisma.user.findUnique({ where: { id: userId } });

  const verified = speakeasy.totp.verify({
    secret: user.authSecret.trim(), // boşluk hatalarını engeller
    encoding: "base32",
    token,
    window: 2, // 60 saniye tolerans
  });

  console.log({
    token: req.body.token,
    userSecret: user.authSecret,
    currentServerTime: new Date().toISOString(),
    isVerified: verified,
  });

  if (!verified) {
    return res.status(401).json({ message: "Geçersiz veya süresi dolmuş kod" });
  }

  await prisma.user.update({
    where: { id: userId },
    data: { is2FAVerified: true },
  });

  res.json({ message: "2FA doğrulandı" });
});

export default router;
