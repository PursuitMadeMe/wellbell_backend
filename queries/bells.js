const db = require("../db/dbConfig.js");

//INDEX ROUTE
const getAllBells = async () => {
    try{
        const allBells = await db.any("SELECT * FROM bells");
        return allBells;
    }catch(err){
        return err;
    }
};

module.exports = { getAllBells}