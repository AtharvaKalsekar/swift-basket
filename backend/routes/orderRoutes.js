import express from "express";
const router = express.Router();

import protect from "../middleware/authMiddlerware.js";
import { addOrderItems } from "../controllers/orderController.js";

router.route("/").post(protect, addOrderItems);

export default router;
