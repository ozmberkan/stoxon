import {
  loginController,
  registerController,
  logoutController,
} from "../controllers/authController.js";

import express from "express";
const router = express.Router();

router.post("/login", loginController);
router.post("/register", registerController);
router.post("/logout", logoutController);

export default router;
