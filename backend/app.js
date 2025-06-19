import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
//
import authRoutes from "./routes/user.route.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/api/user", authRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});
