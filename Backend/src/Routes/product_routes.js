const ProductRoutes = require('express').Router();
const ProductController = require('./../Controllers/product_controller');

ProductRoutes.get("/", ProductController.fetchAllProducts);
ProductRoutes.get("/category/:id", ProductController.fetchProductsByCategory);
ProductRoutes.post("/", ProductController.createProduct);

module.exports = ProductRoutes;

