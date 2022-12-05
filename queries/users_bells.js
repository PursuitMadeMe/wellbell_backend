const db = require("../db/dbConfig.js");

const getAllUsersBells = async () => {
  try {
    const allUsersBells = await db.any("SELECT * FROM users_bells");
    return allUsersBells;
  } catch (err) {
    return err;
  }
};

const getUserBells = async (user_id) => {
  try {
    const oneUserBell = await db.one(
      "SELECT * FROM users_bells WHERE user_id=$1",
      user_id
    );
    return oneUserBell;
  } catch (err) {
    return err;
  }
};

const createUserBell = async (user) => {
  // destructuring our user object
  try {
    const { user_id, bell_id, created } = user;
    const newUserBell = await db.one(
      "INSERT INTO users_bells (user_id, bell_id, created) VALUES ($1, $2, $3) RETURNING *",
      [user_id, bell_id, created]
    );
    return newUserBell;
  } catch (err) {
    return err;
  }
};

// we need to make sure we pass our arguments in the correct order when updating
const updateUserBell = async (user_id, bell_id) => {
  try {
    const { user_id, bell_id } = user;
    const updatedUserBell = await db.one(
      "UPDATE users_bells SET bell_id=$1 WHERE user_id=$2 RETURNING *",
      [bell_id, user_id]
    );
    return updatedUserBell;
  } catch (err) {
    return err;
  }
};

const deleteUserBell = async (user_id) => {
  try {
    const deletedUser = await db.one(
      "DELETE FROM users_bells WHERE user_id=$1 RETURNING *",
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
  getAllUsersBells,
  getUserBells,
  deleteUserBell,
  updateUserBell,
  createUserBell,
  getAllBellsForUser,
  addNewBellForUser,
};
