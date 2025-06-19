import express from "express";
import {
  getUserById,
  login,
  register,
} from "../controllers/user.controller.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/:id", authenticateToken, getUserById);

export default router;
