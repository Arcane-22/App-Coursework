import { sequelize } from "../configs/database.js";
import { Product, Supplier } from "../models/index.js";

const suppliersData = [
  {
    name: "Pixel Distributors",
    email: "orders@pixeldist.com",
    phone: "(555) 402-1187",
  },
  {
    name: "Retro Rewind Co.",
    email: "sales@retrorewind.com",
    phone: "(555) 287-9654",
  },
  {
    name: "NextGen Wholesale",
    email: "contact@nextgenwholesale.com",
    phone: "(555) 511-3320",
  },
];

// Products reference suppliers by their position in suppliersData above
// (0 = Pixel Distributors, 1 = Retro Rewind Co., 2 = NextGen Wholesale)
const productsData = [
  { name: "PlayStation 5 Console (Slim)", description: "Latest slim revision, disc edition, includes one DualSense controller.", price: 499.99, quantity: 6, supplierIndex: 2 },
  { name: "Xbox Series X Console", description: "1TB console, 4K gaming, includes wireless controller.", price: 479.99, quantity: 2, supplierIndex: 2 },
  { name: "Nintendo Switch OLED", description: "OLED model with enhanced 7-inch screen and wide adjustable stand.", price: 349.99, quantity: 14, supplierIndex: 0 },
  { name: "The Last of Us Part II", description: "Pre-owned disc, tested and cleaned, case included.", price: 24.99, quantity: 3, supplierIndex: 1 },
  { name: "DualSense Wireless Controller", description: "Official controller with adaptive triggers and haptic feedback.", price: 69.99, quantity: 22, supplierIndex: 2 },
  { name: "Super Mario Bros. (NES Cartridge)", description: "Original 1985 cartridge, cleaned contacts, tested working.", price: 45.00, quantity: 1, supplierIndex: 1 },
  { name: "Gaming Headset Pro", description: "7.1 surround sound headset with noise-cancelling mic.", price: 89.99, quantity: 30, supplierIndex: 0 },
  { name: "Zelda: Tears of the Kingdom", description: "Sealed copy, includes physical map insert.", price: 59.99, quantity: 18, supplierIndex: 0 },
];

async function seed() {
  await sequelize.authenticate();
  console.log("Connected to database.");

  const createdSuppliers = [];
  for (const s of suppliersData) {
    const supplier = await Supplier.create(s);
    createdSuppliers.push(supplier);
    console.log(`Created supplier "${supplier.name}" (id: ${supplier.id})`);
  }

  for (const p of productsData) {
    const { supplierIndex, ...productFields } = p;
    const supplierId = createdSuppliers[supplierIndex].id;

    const product = await Product.create({
      ...productFields,
      supplierId,
    });
    console.log(`Created product "${product.name}" (id: ${product.id}, supplierId: ${supplierId})`);
  }

  console.log("Seeding complete.");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});