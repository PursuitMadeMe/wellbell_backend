const cors = require("cors");
const express = require("express");

const app = express();
const http = require("http").Server(app);

app.use(express.json());
app.use(cors());

const socketIO = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
  },
});
socketIO.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
  });
});

const bellsController = require("./controllers/bellsController.js");
const rewardsController = require("./controllers/rewardsController.js");
const usersController = require("./controllers/usersController.js");

app.use("/bells", bellsController);
app.use("/rewards", rewardsController);
app.use("/users", usersController);

app.get("/", (req, res) => {
  res.send("Welcome to WellBell!");
});

app.get("/api", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

app.get("*", (req, res) => {
  res.status(404).send("page not found");
});

module.exports = app;
