import {
  getAllUsersController,
  getUserByIdController,
  updateUserController,
  deleteUserController,
} from "../controllers/userController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

import express from "express";
const router = express.Router();

router.post("/getAllUsers", verifyToken, getAllUsersController);
router.post("/getById/:id", verifyToken, getUserByIdController);
router.post("/update/:id", verifyToken, updateUserController);
router.post("/delete/:id", verifyToken, deleteUserController);

export default router;
