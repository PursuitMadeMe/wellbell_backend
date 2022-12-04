const db = require("../db/dbConfig.js");

const getAllRewards = async () => {
  try {
    const allRewards = await db.any(
      "SELECT * FROM rewards"
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
  const { id, type, content, code } = reward;
  try {
    const createdReward = await db.one(
      "INSERT INTO rewards (id, type, content, code) VALUES ($1, $2, $3, $4) RETURNING *",
      [id, type, content, code]
    );
    return createdReward;
  } catch (err) {
    return err;
  }
};

const updateReward = async (id, reward) => {
  const { type, content, code } = reward;
  try {
    const updatedReward = await db.one(
      "UPDATE rewards SET type=$1, content=$2, code=$3 WHERE id=$4 RETURNING *",
      [type, content, code, id]
    );
    return updatedReward;
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


module.exports = {
  getAllRewards,
  getReward,
  createReward,
  updateReward,
  deleteReward,
};
