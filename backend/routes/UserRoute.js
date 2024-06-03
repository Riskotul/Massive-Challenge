import express from "express";
import { getUser, getUserById, createUser } from "../controllers/User.js";

const router = express.Router();

router.get("/user", getUser);
router.get("/user/:id", getUserById);
router.post("/user", createUser);

export default router;
