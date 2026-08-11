import multer from "multer";

export const HandleError = (err, req, res, next) => {
  if (err instanceof multer.MulterError || err.message?.includes("images are allowed")) {
    return res.status(400).json({ error: err.message });
  }

  console.error("Global error!!", err.stack);

  res.status(500).json({
    message: "Internal Server Error",
  });
};