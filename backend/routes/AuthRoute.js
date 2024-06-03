import express from "express";
import { Login, Logout, Me } from "../controllers/Auth.js";
import { verifyToken } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/me", verifyToken, Me);
router.post("/login", Login);
router.delete("/logout", Logout);

export default router;
