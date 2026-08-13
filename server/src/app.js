import express from "express";
import cors from "cors";
import path from "path";

import { HandleError } from "./middlewares/errorHandler.js";
import { HandleNotFound } from "./middlewares/notFoundHandler.js";
import { config } from "./configs/index.js";

import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import supplierRoutes from "./routes/supplierRoutes.js";

const app = express();

app.use(
  cors({
    origin: config.cors.allowedOrigins,
    methods: config.cors.allowedMethods,
  }),
);

app.use(express.json());

// Serve uploaded images
app.use(
  "/api/uploads",
  express.static(path.join(process.cwd(), "uploads")),
);

app.get("/", (req, res) => {
  return res.status(200).send("Welcome to PixelStock API");
});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/suppliers", supplierRoutes);

app.use(HandleNotFound);
app.use(HandleError);

export default app;