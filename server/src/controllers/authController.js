import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export async function login(req, res) {
  const { username, password } = req.body;

  const user = await User.findOne({ where: { username } });
  if (!user) {
    return res.status(401).json({ error: "Invalid username or password" });
  }

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) {
    return res.status(401).json({ error: "Invalid username or password" });
  }

  const fullName = `${user.firstName} ${user.lastName}`;

  const token = jwt.sign(
    { userId: user.id, fullName },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.json({ token, id: user.id, username: user.username, fullName });
}

export async function logout(req, res) {
  res.json({ message: "Logged out successfully" });
}