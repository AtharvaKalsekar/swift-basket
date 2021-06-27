import express from "express";
const router = express.Router();
import protect, { admin } from "../middleware/authMiddlerware.js";

import {
  getProducts,
  getProductById,
  deleteProductById,
  createProduct,
  updateProduct,
  createReview,
  getTopProducts,
} from "../controllers/productController.js";

router.route("/").get(getProducts);

router.route("/top").get(getTopProducts);

router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProductById)
  .post(protect, admin, createProduct)
  .put(protect, admin, updateProduct);

router.route("/:id/review").post(protect, createReview);

export default router;
