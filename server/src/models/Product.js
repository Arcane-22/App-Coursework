import { DataTypes } from "sequelize";
import { sequelize } from "../configs/database.js";

export const Product = sequelize.define("Product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  supplierId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: "products",
  timestamps: true,
});