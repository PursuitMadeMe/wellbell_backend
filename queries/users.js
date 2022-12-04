const db = require("../db/dbConfig.js");

const getAllUsers = async () => {
  try {
    const allUsers = await db.any("SELECT * FROM users");
    return allUsers;
  } catch (err) {
    return err;
  }
};

const getUser = async (user_id) => {
  try {
    const oneUser = await db.one(
      "SELECT * FROM users WHERE user_id=$1",
      user_id
    );
    return oneUser;
  } catch (err) {
    return err;
  }
};

const createUser = async (user) => {
  // destructuring our user object
  try {
    const {
      user_id,
      email,
      username,
      firstname,
      lastname,
      physicalpoints,
      nutritionalpoints,
      selfcarepoints,
      physicalpreferences,
      nutritionalpreferences,
      mentalpreferences,
    } = user;
    const newUser = await db.one(
      "INSERT INTO users (user_id, email, username, firstname, lastname, physicalpoints, nutritionalpoints, selfcarepoints, physicalpreferences, nutritionalpreferences, mentalpreferences) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *",
      [
        user_id,
        email,
        username,
        firstname,
        lastname,
        physicalpoints,
        nutritionalpoints,
        selfcarepoints,
        physicalpreferences,
        nutritionalpreferences,
        mentalpreferences,
      ]
    );
    return newUser;
  } catch (err) {
    return err;
  }
};

// we need to make sure we pass our arguments in the correct order when updating
const updateUser = async (user, user_id) => {
  try {
    const {
      email,
      username,
      firstname,
      lastname,
      physicalpoints,
      nutritionalpoints,
      selfcarepoints,
      physicalpreferences,
      nutritionalpreferences,
      mentalpreferences,
    } = user;
    const updatedUser = await db.one(
      "UPDATE users SET email=$1, username=$2, firstname=$3, lastname=$4, physicalpoints=$5, nutritionalpoints=$6, selfcarepoints=$7, physicalpreferences=$8, nutritionalpreferences=$9, mentalpreferences=$10 WHERE user_id=$11 RETURNING *",
      [
        email,
        username,
        firstname,
        lastname,
        physicalpoints,
        nutritionalpoints,
        selfcarepoints,
        physicalpreferences,
        nutritionalpreferences,
        mentalpreferences,
        user_id,
      ]
    );
    return updatedUser;
  } catch (err) {
    return err;
  }
};

const deleteUser = async (user_id) => {
  try {
    const deletedUser = await db.one(
      "DELETE FROM users WHERE user_id=$1 RETURNING *",
      user_id
    );
    return deletedUser;
  } catch (err) {
    return err;
  }
};

const getAllBellsForUser = async (user_id) => {
  try {
    const bellsByUser = db.any(
      `SELECT 
                users_bells
            JOIN
                bells
            ON
                users_bells.bell_id = bells.id
            JOIN
                users
            ON
                users.user_id = users_bells.user_id
            WHERE
                users_bells.user_id = $1`,
      user_id
    );
    return bellsByUser;
  } catch (err) {
    return err;
  }
};

const addNewBellForUser = async (user_id, bell_id) => {
  try {
    // db.none returns NULL ALWAYS
    const addedBell = await db.one(
      `INSERT INTO users_bells (user_id, bell_id) VALUES ($1, $2) RETURNING *`,
      [user_id, bell_id]
    );
    return addedBell;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  createUser,
  getAllBellsForUser,
  addNewBellForUser,
};
