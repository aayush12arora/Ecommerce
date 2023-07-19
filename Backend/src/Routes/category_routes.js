const CategoryRoutes = require('express').Router();
const CategoryController = require('./../Controllers/category_controller');

CategoryRoutes.get("/", CategoryController.fetchAllCategories);
CategoryRoutes.get("/:id", CategoryController.fetchCategoryById);
CategoryRoutes.post("/", CategoryController.createCategory);

module.exports = CategoryRoutes;

