//DEPENDENCIES
const cors = require("cors");
const express = require("express");

//CONFIGURATION
const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(cors());


const bellsController = require("./controllers/bellsController");

app.use("/bells", bellsController);

// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to WellBell!!");
});

//404 PAGE
app.get("*", (req, res) => {
    res.status(404).send("page not found")
});

//EXPORT
module.exports = app;
