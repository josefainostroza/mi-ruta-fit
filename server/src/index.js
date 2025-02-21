require("dotenv").config();
const express = require("express");
const userRouter = require("./routes/users.routes");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const corsOptions = {
  origin: "*", // Orígenes permitidos
  methods: ["GET", "POST", "PATCH", "DELETE"], // Métodos permitidos
  allowedHeaders: ["Content-Type", "Authorization"], // Headers permitidos
  credentials: true, // Habilitar cookies/credenciales
};

const user = process.env.MONGODB_USER;
const password = process.env.MONGODB_PASSWORD;
const nameCollection = process.env.MONGODB_NAMECOLLECTION;
const url = `mongodb+srv://${user}:${password}@josefa.sapbq.mongodb.net/${nameCollection}?retryWrites=true&w=majority&appName=Josefa`;
mongoose.connect(url);

const port = process.env.PORT;

app.use(cors(corsOptions));
app.use(express.json());

app.use("/user", userRouter);
// app.use('/activity', activityRouter)

app.listen(port, () => {
  console.log("Server is running on port" + port);
});
