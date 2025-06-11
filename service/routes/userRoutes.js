import {
  getAllUsersController,
  getUserByIdController,
  updateUserController,
  deleteUserController,
  getMyInfoController,
} from "../controllers/userController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

import express from "express";
const router = express.Router();

router.get("/getAllUsers", verifyToken, getAllUsersController);
router.get("/getById/:id", verifyToken, getUserByIdController);
router.put("/update/:id", verifyToken, updateUserController);
router.delete("/delete/:id", verifyToken, deleteUserController);
router.get("/getMyInfo", verifyToken, getMyInfoController);

export default router;
