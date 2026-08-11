import { Router } from "express";

import {getAllProducts, getProductById, createProduct, updateProduct, deleteProduct} 
from "../controllers/productController.js";

import {createProductValidator, updateProductValidator} from "../validators/productValidator.js";

import { validate } from "../middlewares/validationMiddleware.js";
import { requireAuth } from "../middlewares/requireAuth.js";
import { uploadProductImage } from "../middlewares/uploadMiddleware.js";

const router = Router();

router.use(requireAuth);

router.get("/", getAllProducts);
router.get("/:id", getProductById);

router.post(
  "/",
  uploadProductImage.single("image"),
  createProductValidator,
  validate,
  createProduct,
);

router.put(
  "/:id",
  uploadProductImage.single("image"),
  updateProductValidator,
  validate,
  updateProduct,
);

router.delete("/:id", deleteProduct);

export default router;