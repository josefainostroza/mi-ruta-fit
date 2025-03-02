const express = require("express");
const userRoutes = express.Router();
const userController = require("../controllers/userController");

// Get -> Obtener Datos
// Post -> Enviar Datos
// Patch -> Actualizar Datos
// Delete -> Borrar Datos

// req -> Request ->petición
// res -> Response -> respuesta

userRoutes.get("/", userController.getAllUsers);
userRoutes.post("/create", userController.addUser);
userRoutes.post("/login", userController.login);
userRoutes.post("/activities", userController.getUserByEmail);
userRoutes.post("/:id", userController.updateUser);

module.exports = userRoutes;
