import { body } from "express-validator";

const name = body("name").trim().notEmpty().withMessage("Name is required");
const email = body("email").trim().isEmail().withMessage("Enter a valid email address");
const phone = body("phone").trim().notEmpty().withMessage("Phone is required");

export const createSupplierValidator = [name, email, phone];

export const updateSupplierValidator = [
  name.optional(),
  email.optional(),
  phone.optional(),
];