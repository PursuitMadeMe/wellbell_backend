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
      "INSERT INTO bells (name, type, notification, funfact) VALUES($1, $2, $3, $4) RETURNING *",
      [bell.name, bell.type, bell.notification, bell.funfact]
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
      "UPDATE bells SET name=$1, type=$2, notification=$3, funfact=$4 WHERE id=$5 RETURNING *",
      [bell.name, bell.type, bell.notification, bell.funfact, id]
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
