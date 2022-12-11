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
    const { user_id, bell_id, created, completion } = user;
    const newUserBell = await db.one(
      "INSERT INTO users_bells (user_id, bell_id, created, completion) VALUES ($1, $2, $3, $4) RETURNING *",
      [user_id, bell_id, created, completion]
    );
    return newUserBell;
  } catch (err) {
    return err;
  }
};

// we need to make sure we pass our arguments in the correct order when updating
const updateUserBell = async (user_id, bell_id) => {
  try {
    const { user_id, bell_id, completion } = user;
    const updatedUserBell = await db.one(
      "UPDATE users_bells SET bell_id=$1, completion=$2 WHERE user_id=$4 RETURNING *",
      [bell_id, completion, user_id]
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

module.exports = {
  getAllUsersBells,
  getUserBells,
  deleteUserBell,
  updateUserBell,
  createUserBell,
};
