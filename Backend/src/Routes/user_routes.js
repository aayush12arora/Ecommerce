const UserRoutes = require('express').Router();
const UserController = require('./../Controllers/user_Controller');

UserRoutes.post("/createAccount", UserController.createAccount);
 UserRoutes.post("/signIn", UserController.signIn);
// UserRoutes.put("/:id", UserController.updateUser);

module.exports = UserRoutes;