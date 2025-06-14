import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import claimsRoutes from "./routes/claimsRoutes.js";

dotenv.config();

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("🚀 - Welcome to the stoxon API, Service is running! ");
});

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/claims", claimsRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
