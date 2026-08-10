import { Product } from "./Product.js";
import { Supplier } from "./Supplier.js";
import User from "./User.js";  

Supplier.hasMany(Product, { foreignKey: "supplierId" });
Product.belongsTo(Supplier, { foreignKey: "supplierId" });

export { Product, Supplier, User };