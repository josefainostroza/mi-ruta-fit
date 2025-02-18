const User = require("../models/User");

const userController = {
  //req-> Lo que me llega
  //res-> Lo que envio
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(400).send({ message: "No se encontro el usuario" });
    }
  },
  addUser: async (req, res) => {
    try {
      const userToAdd = req.body;
      const userAdded = await User.create(userToAdd);
      res.json(userAdded);
    } catch (error) {
      res.status(400).send({ message: "No se encontro el usuario" });
    }
  },
};

module.exports = userController;
