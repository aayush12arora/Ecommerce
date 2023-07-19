
const CartRoutes = require('express').Router();
const CartController = require('./../Controllers/cart_controller');

CartRoutes.get("/:user", CartController.getCartForUser);
CartRoutes.post("/", CartController.addToCart);
CartRoutes.delete("/", CartController.removeFromCart);

module.exports = CartRoutes;