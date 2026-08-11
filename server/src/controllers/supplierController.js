import { Supplier, Product } from "../models/index.js";

export async function getAllSuppliers(req, res) {
  const suppliers = await Supplier.findAll();
  res.json(suppliers);
}

export async function getSupplierById(req, res) {
  const supplier = await Supplier.findByPk(req.params.id, {
    include: { model: Product },
  });

  if (!supplier) {
    return res.status(404).json({ error: "Supplier not found" });
  }

  res.json(supplier);
}

export async function createSupplier(req, res) {
  const { name, email, phone } = req.body;

  const supplier = await Supplier.create({ name, email, phone });
  res.status(201).json(supplier);
}

export async function updateSupplier(req, res) {
  const supplier = await Supplier.findByPk(req.params.id);

  if (!supplier) {
    return res.status(404).json({ error: "Supplier not found" });
  }

  const { name, email, phone } = req.body;
  await supplier.update({ name, email, phone });
  res.json(supplier);
}

export async function deleteSupplier(req, res) {
  const supplier = await Supplier.findByPk(req.params.id);

  if (!supplier) {
    return res.status(404).json({ error: "Supplier not found" });
  }

  const productCount = await Product.count({ where: { supplierId: supplier.id } });
  if (productCount > 0) {
    return res.status(409).json({
      error: "Cannot delete supplier with products still assigned to them",
    });
  }

  await supplier.destroy();
  res.status(204).send();
}
