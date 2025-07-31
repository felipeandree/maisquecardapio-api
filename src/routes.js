const express = require("express");
const router = express.Router();

const ProductController = require("../src/app/controllers/product/ProductController");

router.get("/api/products", ProductController.get);

router.get("/api/products/:id", ProductController.getById);

router.post("/api/product", ProductController.post);

router.delete("/api/product/:id", ProductController.delete);

router.put("/api/product/:id", ProductController.put);

module.exports = router;
