import { DataTypes } from "sequelize";
import { sequelize } from "../configs/database.js";

export const Supplier = sequelize.define("Supplier", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: "suppliers",
  timestamps: true,
});