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
userRoutes.post("/login", userController.getUserByEmail);

module.exports = userRoutes;
