import express from "express";
import { HandleError } from "./middlewares/errorHandler.js";
import { HandleNotFound } from "./middlewares/notFoundHandler.js";
import cors from "cors";
import { config } from "./configs/index.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(
  cors({
    origin: config.cors.allowedOrigins,
    methods: config.cors.allowedMethods,
  }),
);

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).send("Welcome to PixelStock API");
});

app.use("/api/auth", authRoutes);
// app.use("/api/products", productRoutes);   ← add once productRoutes.js exists
// app.use("/api/suppliers", supplierRoutes); ← add once supplierRoutes.js exists

app.use(HandleNotFound);
app.use(HandleError);

export default app;