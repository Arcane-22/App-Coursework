import { Op } from "sequelize";
import { Product, Supplier } from "../models/index.js";

export async function getAllProducts(req, res) {
  const { search, supplierId } = req.query;

  const where = {};

  if (search) {
    where.name = {
      [Op.like]: `%${search}%`,
    };
  }

  if (supplierId) {
    where.supplierId = supplierId;
  }

  const products = await Product.findAll({
    where,
    include: {
      model: Supplier,
    },
  });

  res.json(products);
}

export async function getProductById(req, res) {
  const product = await Product.findByPk(req.params.id, {
    include: {
      model: Supplier,
    },
  });

  if (!product) {
    return res.status(404).json({
      error: "Product not found",
    });
  }

  res.json(product);
}

export async function createProduct(req, res) {
  const {
    name,
    description,
    price,
    quantity,
    supplierId,
  } = req.body;

  const supplier = await Supplier.findByPk(supplierId);

  if (!supplier) {
    return res.status(400).json({
      error: "Supplier not found",
    });
  }

  const product = await Product.create({
    name,
    description,
    price,
    quantity,
    image: req.file ? `/uploads/${req.file.filename}` : null,
    supplierId,
  });

  res.status(201).json(product);
}

export async function updateProduct(req, res) {
  const product = await Product.findByPk(req.params.id);

  if (!product) {
    return res.status(404).json({
      error: "Product not found",
    });
  }

  if (req.body.supplierId) {
    const supplier = await Supplier.findByPk(req.body.supplierId);

    if (!supplier) {
      return res.status(400).json({
        error: "Supplier not found",
      });
    }
  }

  const {
    name,
    description,
    price,
    quantity,
    supplierId,
  } = req.body;

  const updateData = {
    name,
    description,
    price,
    quantity,
    supplierId,
  };

  // Only replace the image if a new one was uploaded
  if (req.file) {
    updateData.image = `/uploads/${req.file.filename}`;
  }

  await product.update(updateData);

  res.json(product);
}

export async function deleteProduct(req, res) {
  const product = await Product.findByPk(req.params.id);

  if (!product) {
    return res.status(404).json({
      error: "Product not found",
    });
  }

  await product.destroy();

  res.status(204).send();
}