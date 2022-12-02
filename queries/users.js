const db = require("../db/dbConfig.js");

const getAllUsers = async () => {
  try {
    const allUsers = await db.any("SELECT * FROM users");
    return allUsers;
  } catch (err) {
    return err;
  }
};

const getUser = async (id) => {
  try {
    const oneUser = await db.one("SELECT * FROM users WHERE id=$1", id);
    return oneUser;
  } catch (err) {
    return err;
  }
};

const createUser = async (user) => {
  try {
    const { username, email, ppoints, npoints, scpoints } = user;
    const newUser = await db.one(
      "INSERT INTO users (username, email, ppoints, npoints, scpoints) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [username, email, ppoints, npoints, scpoints]
    );
    return newUser;
  } catch (err) {
    return err;
  }
};

// we need to make sure we pass our arguments in the correct order when updating
const updateUser = async (user, id) => {
  try {
    const { username, email, ppoints, npoints, scpoints } = user;
    const updatedUser = await db.one(
      "UPDATE users SET username=$1, email=$2, admin=$3, verified=$4 WHERE id=$5 RETURNING *",
      [username, email, ppoints, npoints, scpoints, id]
    );
    return updatedUser;
  } catch (err) {
    return err;
  }
};

const deleteUser = async (id) => {
  try {
    const deletedUser = await db.one(
      "DELETE FROM users WHERE id=$1 RETURNING *",
      id
    );
    return deletedUser;
  } catch (err) {
    return err;
  }
};

const getAllBellsForUser = async (id) => {
  try {
    const bellsByUser = db.any(
      `SELECT 
                bookmark_id, user_id, name, is_favorite, category
            FROM
                users_bells
            JOIN
                users
            ON
                users.id = users_id.user_bells
            JOIN
                bells
            ON
                bells.id = user_bells.bell_id
            WHERE
                users_id.user_bells = $1
            `,
      id
    );
    return bellsByUser;
  } catch (err) {
    return err;
  }
};

const addNewBellForUser = async (userId, bellId) => {
  try {
    // db.none returns NULL ALWAYS
    const addedBell = await db.oneOrNone(
      `INSERT INTO users_bells (user_id, bell_id) VALUES ($1, $2) RETURNING *`,
      [userId, bellId]
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
