import bcrypt from "bcrypt";
import User from "../models/User.js";
import { sequelize } from "../configs/database.js";

const run = async () => {
  const passwordHash = await bcrypt.hash("#Britannia", 10);
  await User.create({
    firstName: "Admin",
    lastName: "User",
    username: "admin",
    passwordHash,
  });
  console.log("Admin user created");
  process.exit(0);
};

run();