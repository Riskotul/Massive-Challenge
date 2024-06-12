import express from "express";
import { getEditById, updateEditById  } from "../controllers/Edit.js";

const router = express.Router();

router.get("/edit/:id", getEditById);
router.put("/edit/:id", updateEditById);

export default router;