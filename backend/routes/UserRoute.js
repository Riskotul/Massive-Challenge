import express from "express";
import { getUser, getUserById, createUser, updateUser } from "../controllers/User.js";

const router = express.Router();

router.get("/user", getUser);
router.get("/user/:id", getUserById);
router.post("/user", createUser);
router.put("/user/:id", updateUser);

export default router;
