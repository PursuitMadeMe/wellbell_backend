const db = require("../db/dbConfig.js");

//INDEX ROUTE
const getAllBells = async () => {
  try {
    const allBells = await db.any("SELECT * FROM bells");
    return allBells;
  } catch (err) {
    return err;
  }
};

// SHOW Route
const getBell = async (id) => {
  try {
    const oneBell = await db.one("SELECT * FROM bells WHERE id=$1", id);
    return oneBell;
  } catch (error) {
    return error;
  }
};

// CREATE Route
const createBell = async (bell) => {
  try {
    const newBell = await db.one(
      "INSERT INTO bells (type, message, funfact) VALUES($1, $2, $3) RETURNING *",
      [bell.type, bell.message, bell.funfact]
    );
    console.log("NEW BELL : ", newBell);
    return newBell;
  } catch (error) {
    return error;
  }
};

// UPDATE Route
const updateBell = async (bell, id) => {
  try {
    const updatedBell = await db.one(
      "UPDATE bells SET type=$1, message=$2, funfact=$3 WHERE id=$5 RETURNING *",
      [bell.type, bell.message, bell.funfact, id]
    );
    console.log(updatedBell, "Well Bell updated");
    return updatedBell;
  } catch (error) {
    console.log("NO UPDATE");
    return error;
  }
};

// DELETE Route
const deleteBell = async (id) => {
  try {
    const deletedBell = await db.one(
      "DELETE FROM bells WHERE id=$1 RETURNING *",
      id
    );
    return deletedBell;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllBells, getBell, createBell, updateBell, deleteBell };
