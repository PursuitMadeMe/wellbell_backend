const express = require("express");
const rewards = express.Router();
const {
  getAllRewards,
  getReward,
  createReward,
  updateReward,
  deleteReward,
} = require("../queries/rewards.js");

//INDEX
rewards.get("/", async (req, res) => {
  const allRewards = await getAllRewards();
  if (allRewards[0]) {
    res.status(200).json({ payload: allRewards, success: true });
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// Read (Singular/Specific ID)
rewards.get("/:id", async (req, res) => {
  const { id } = req.params;
  const reward = await getReward(id);
  if (reward.id) {
    res.json({ payload: reward, success: true });
  } else {
    res.status(404).json({
      payload: "not found",
      success: false,
      error: "reward not found",
    });
  }
});

// Create
rewards.post("/", async (req, res) => {
  const { body } = req;

  body.id = body;

  try {
    const createdReward = await createReward(body.payload);
    if (createdReward.id) {
      res.status(200).json({
        success: true,
        payload: createdReward,
      });
    } else {
      res.status(422).json({
        success: false,
        payload: "Must include type field",
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// Update
rewards.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  body.id = body;

  const updatedReward = await updateReward(req.body, id);
  console.log(updatedReward);
  if (updatedReward.id) {
    res.status(200).json(updatedReward);
  } else {
    res.status(404).json({ error: "reward not found" });
  }
});

// Delete
rewards.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedReward = await deleteReward(id);
  if (deletedReward.id) {
    res.status(200).json({ payload: deletedReward, success: true });
  } else {
    res.status(404).json({ payload: "reward not found", success: false });
  }
});

module.exports = rewards;
