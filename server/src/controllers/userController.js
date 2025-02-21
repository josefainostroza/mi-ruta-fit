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
    console.log("OK");
    try {
      const userToAdd = req.body;
      const userAdded = await User.create(userToAdd);
      res.json(userAdded);
    } catch (error) {
      res.status(400).send({ message: "No se encontro el usuario" });
    }
  },
  getUserByEmail: async (req, res) => {
    try {
      const userToSearch = req.body;
      const user = await User.findOne({
        email: userToSearch.email,
      });

      if (!user) {
        res.status(200).json({
          login: false,
          message: "No se encontro usuarios en la base de datos",
        });
        return;
      }

      if (userToSearch.password === user.password) {
        res.status(200).json({ login: true });
      } else {
        res
          .status(200)
          .json({ login: false, message: "La contraseña no coincide" });
      }
    } catch (error) {
      res.status(400).send({ message: "No se encontro el usuario" });
    }
  },
};

module.exports = userController;
