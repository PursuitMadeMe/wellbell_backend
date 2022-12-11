const db = require("../db/dbConfig.js");

const getAllUsersRewards = async () => {
  try {
    const allUsersRewards = await db.any("SELECT * FROM users_rewards");
    return allUsersRewards;
  } catch (err) {
    return err;
  }
};

const getUserRewards = async (user_id) => {
  try {
    const oneUserReward = await db.one(
      "SELECT * FROM users_rewards WHERE user_id=$1",
      user_id
    );
    return oneUserReward;
  } catch (err) {
    return err;
  }
};

const createUserReward = async (user) => {
  // destructuring our user object
  try {
    const { user_id, reward_id, created } = user;
    const newUserReward = await db.one(
      "INSERT INTO users_rewards (user_id, reward_id, created) VALUES ($1, $2, $3) RETURNING *",
      [user_id, reward_id, created]
    );
    return newUserReward;
  } catch (err) {
    return err;
  }
};

// we need to make sure we pass our arguments in the correct order when updating
const updateUserReward = async (user_id, reward_id) => {
  try {
    const { user_id, reward_id } = user;
    const updatedUserReward = await db.one(
      "UPDATE users_rewards SET reward_id=$1 WHERE user_id=$2 RETURNING *",
      [reward_id, user_id]
    );
    return updatedUserReward;
  } catch (err) {
    return err;
  }
};

const deleteUserReward = async (user_id) => {
  try {
    const deletedUser = await db.one(
      "DELETE FROM users_rewards WHERE user_id=$1 RETURNING *",
      user_id
    );
    return deletedUser;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllUsersRewards,
  getUserRewards,
  deleteUserReward,
  updateUserReward,
  createUserReward,
};
