// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();
const http = require("http").Server(app);

// MIDDLEWARE
app.use(express.json());
app.use(cors());

const socketIO = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
  },
});
//Add this before the app.get() block
socketIO.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
  });
});

// CONTROLLERS
const bellsController = require("./controllers/bellsController.js");
const rewardsController = require("./controllers/rewardsController.js");
const usersController = require("./controllers/usersController.js");

app.use("/bells", bellsController);
app.use("/rewards", rewardsController);
app.use("/users", usersController);

// Allows requests from other origins (e.g. our REACT APP)
// PARSES JSON FOR US SO WE CAN USE IT.

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to WellBell!");
});

app.get("/api", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

//404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("page not found");
});

//EXPORT
module.exports = app;
