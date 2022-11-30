const db = require("../db/dbConfig.js");

const getAllRewards = async (userId) => {
  try {
    const allRewards = await db.any(
      "SELECT * FROM rewards WHERE user_id=$1",
      userId
    );
    return allRewards;
  } catch (err) {
    return err;
  }
};

const getReward = async (id) => {
  try {
    const reward = await db.one("SELECT * FROM rewards WHERE id=$1", id);
    return reward;
  } catch (err) {
    return err;
  }
};

const createReward = async (reward) => {
  const { type, content } = reward;
  try {
    const createdReward = await db.one(
      "INSERT INTO rewards (user_id, type, content) VALUES ($1, $2, $3) RETURNING *",
      [user_id, type, content]
    );
    return createdReward;
  } catch (err) {
    return err;
  }
};

const deleteReward = async (id) => {
  try {
    const deletedReward = await db.one(
      "DELETE FROM rewards WHERE id =$1 RETURNING *",
      id
    );
    return deletedReward;
  } catch (err) {
    return err;
  }
};

const updateReward = async (id, reward) => {
  const { user_id, type, content } = reward;

  try {
    const updatedReward = await db.one(
      "UPDATE rewards SET user_id=$1, type=$2, content=$3 WHERE id=$4 RETURNING *",
      [user_id, type, content, id]
    );
    return updatedReward;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllRewards,
  getReward,
  createReward,
  updateReward,
  deleteReward,
};
