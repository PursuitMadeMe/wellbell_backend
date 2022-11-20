const cors = require("cors");
const express = require("express");
const bellsController = require("./controllers/bellsController");


const app = express();
//middleware
app.use(express.json());
app.use(cors());


app.use("/bells", bellsController);

// get
app.get("/", (req, res) => {
    res.send("Welcome to WellBell!!")
});

// const db = require("./db/dbConfig.js");

app.get("*", (req, res) => {
    res.status(404).send("page not found")
});

module.exports = app;
