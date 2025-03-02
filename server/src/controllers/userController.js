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
      res.status(400).send({ message: "Error al registrar el usuario" });
    }
  },
  getUserByEmail: async (req, res) => {
    try {
      const userToSearch = req.body;
      const user = await User.findOne({
        email: userToSearch.email,
      });
      res.json(user);
    } catch (error) {
      res.status(400).json({ msg: error });
    }
  },
  login: async (req, res) => {
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

      console.log(user);

      if (userToSearch.password === user.password) {
        res.status(200).json({ login: true, email: user.email, id: user._id });
      } else {
        res.status(200).json({
          login: false,
          message: "La contraseña no coincide",
        });
      }
    } catch (error) {
      res.status(400).send({ message: "No se encontro el usuario" });
    }
  },
  updateUser: async (req, res) => {
    console.log("Pasa");
    try {
      const idUser = req.params.id;
      const { toa, km, startDate, endDate } = req.body;

      const userToUpdate = await User.findByIdAndUpdate(
        {
          _id: idUser,
        },
        {
          $push: {
            activities: {
              toa,
              km,
              startDate,
              endDate,
            },
          },
        },
        {
          new: true,
        }
      );
      res.json(userToUpdate);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = userController;
