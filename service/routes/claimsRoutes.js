import express from "express";
import {
  createClaimController,
  assignClaimController,
  getUserClaimsController,
} from "../controllers/claimsController.js";

const router = express.Router();

router.post("/", createClaimController);
router.post("/assign", assignClaimController);
router.get("/user/:id", getUserClaimsController);

export default router;
