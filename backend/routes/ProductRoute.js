const express = require("express");
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/ProductController");

const route = express.Router();

route.get("/products", getProducts);
route.get("/products/:id", getProductById);
route.post("/products", createProduct);
route.patch("/products/:id", updateProduct);
route.delete("/products/:id", deleteProduct);

module.exports = route;
