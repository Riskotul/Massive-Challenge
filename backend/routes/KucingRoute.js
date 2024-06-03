import express from "express";
import { getKucing, getKucingById } from "../controllers/Kucing.js";

const router = express.Router();

router.get("/kucing", getKucing);
router.get("/kucing/:id", getKucingById);

export default router;
