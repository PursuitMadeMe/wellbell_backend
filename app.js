const cors = require("cors");
const express = require("express");


const app = express();
// const bellController = require("./controllers/bellsController")
//middleware
app.use(cors());
app.use(express.json());



// app.use("/bells", bellController);

// get
app.get("/", (req, res) => {
    res.send("Welcome to WellBell!")
});

// const db = require("./db/dbConfig.js");

app.get("*", (req, res) => {
    res.status(404).send("page not found")
});

module.exports = app;
