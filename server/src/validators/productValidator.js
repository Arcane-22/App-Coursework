import { body } from "express-validator";

const name = body("name").trim().notEmpty().withMessage("Name is required");
const price = body("price").isFloat({ min: 0 }).withMessage("Price must be 0 or more");
const quantity = body("quantity").isInt({ min: 0 }).withMessage("Quantity must be 0 or more");
const supplierId = body("supplierId").notEmpty().withMessage("Supplier is required");

export const createProductValidator = [name, price, quantity, supplierId];

export const updateProductValidator = [
  name.optional(),
  price.optional(),
  quantity.optional(),
  supplierId.optional(),
];