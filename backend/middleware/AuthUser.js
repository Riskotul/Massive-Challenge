import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const authCookies = req.headers["cookie"];
  const token = authHeader && authHeader.split(" ")[1];
  const refreshToken = authCookies && authCookies.split("=")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ msg: "Mohon login ke akun anda!" });
    req.email = decoded.email;
    req.userId = decoded.userId;
    req.name = decoded.name;
    req.role = decoded.role;
    next();
  });
};
