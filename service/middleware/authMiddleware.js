import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  console.log("verifyToken çalıştı");

  const bearerHeader = req.headers["authorization"];
  const cookieToken = req.cookies?.token;

  let token = null;

  if (bearerHeader && bearerHeader.startsWith("Bearer ")) {
    token = bearerHeader.split(" ")[1];
  } else if (cookieToken) {
    token = cookieToken;
  }

  if (!token || token.trim() === "") {
    console.log("Token yok veya boş");
    return res.status(401).json({ message: "Token eksik veya boş!" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log("Token doğrulandı:", decoded);
    next();
  } catch (error) {
    console.log("Token geçersiz:", error.message);
    return res.status(403).json({ message: "Geçersiz token!" });
  }
};
