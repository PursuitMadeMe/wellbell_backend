const express = require("express");
const bells = express.Router();
const { getAllBells} = require("../queries/bells.js");

//INDEX 
bells.get("/", async (req, res) => {
    const allBells = await getAllBells();
    if(allBells[0]){
        res.status(200).json({payload: allBells, success: true});
    }else{
        res.status(500).json({error: "server error"});
    }
});

module.exports = bells;