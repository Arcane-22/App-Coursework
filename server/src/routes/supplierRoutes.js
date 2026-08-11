import { Router } from "express";
import { getAllSuppliers, getSupplierById, createSupplier, updateSupplier, deleteSupplier } 
from "../controllers/supplierController.js";
import { createSupplierValidator, updateSupplierValidator } from "../validators/supplierValidator.js";
import { validate } from "../middlewares/validationMiddleware.js";
import { requireAuth } from "../middlewares/requireAuth.js";

const router = Router();

router.use(requireAuth);

router.get("/", getAllSuppliers);
router.get("/:id", getSupplierById);
router.post("/", createSupplierValidator, validate, createSupplier);
router.put("/:id", updateSupplierValidator, validate, updateSupplier);
router.delete("/:id", deleteSupplier);

export default router;