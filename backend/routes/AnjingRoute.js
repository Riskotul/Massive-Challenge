import express from "express";
import { getAnjing, getAnjingById } from "../controllers/Anjing.js";

const router = express.Router();

router.get("/anjing", getAnjing);
router.get("/anjing/:id", getAnjingById);

export default router;
