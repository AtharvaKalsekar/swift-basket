import express from "express";
const router = express.Router();
import protect, { admin } from "../middleware/authMiddlerware.js";

import {
  getProducts,
  getProductById,
  deleteProductById,
  createProduct,
  updateProduct,
} from "../controllers/productController.js";

router.route("/").get(getProducts);

router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProductById)
  .post(protect, admin, createProduct)
  .put(protect, admin, updateProduct);

export default router;
