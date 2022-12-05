const express = require("express");
const users_rewards = express.Router();

// we are destructuring the object exported from users_rewards.js

const {
  getAllUsersRewards,
  getUserRewards,
  createUserReward,
  updateUserReward,
  deleteUserReward,
  getAllRewardsForUser,
  addNewRewardForUser,
} = require("../queries/users_rewards.js");

//INDEX
users_rewards.get("/", async (req, res) => {
  const allUsersRewards = await getAllUsersRewards();
  if (allUsersRewards[0]) {
    res.status(200).json({ payload: allUsersRewards, success: true });
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// Read (Singular/Specific ID)
users_rewards.get("/:user_id", async (req, res) => {
  const { user_id } = req.params;
  const user = await getUserRewards(user_id);
  if (user.user_id) {
    res.json({ payload: user, success: true });
  } else {
    res.status(404).json({
      payload: "not found",
      success: false,
      error: "user not found",
    });
  }
});

// CAN FIND SPECIFIC USER/EMAIL THROUGH GET REQUEST

users_rewards.get("/:user_id/rewards", async (req, res) => {
  const { user_id, reward_id } = req.params;
  const usersrewardsRewards = await getAllRewardsForUser(user_id, reward_id);
  res.json(usersrewardsRewards);
});

users_rewards.post("/:user_id/rewards/:reward_id", async (req, res) => {
  const { user_id, reward_id } = req.params;
  const successfulAddReward = await addNewRewardForUser(user_id, reward_id);
  if (successfulAddReward) {
    res.status(201).json({ message: "Reward for user created!" });
  } else {
    res.status(422).json({ error: "unprocessable entity" });
  }
});

// Create
users_rewards.post("/", async (req, res) => {
  const { body } = req;
  // ONLY a successful post will return an object with a key of user_id
  body.user_id = body;

  try {
    const createdUserReward = await createUserReward(body.payload);
    if (createdUserReward.user_id) {
      res.status(200).json({
        success: true,
        payload: createdUser,
      });
    } else {
      res.status(422).json({
        success: false,
        payload: "Must include email field",
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// Update
users_rewards.put("/:id", async (req, res) => {
  const { user_id } = req.params;

  const updatedUserReward = await updateUserReward(req.body, user_id);
  console.log(updatedUserReward);
  if (updatedUserReward.user_id) {
    res.status(200).json(updatedUser);
  } else {
    res.status(404).json({ error: "user not found" });
  }
});

// Delete
users_rewards.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUserReward = await deleteUserReward(id);
  if (deletedUserReward.user_id) {
    res.status(200).json({ payload: deletedUser, success: true });
  } else {
    res.status(404).json({ payload: "User not found", success: false });
  }
});

module.exports = users_rewards;
