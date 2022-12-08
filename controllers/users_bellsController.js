const express = require("express");
const users_bells = express.Router();

// we are destructuring the object exported from users_bells.js

const {
  getAllUsersBells,
  getUserBells,
  createUserBell,
  updateUserBell,
  deleteUserBell,
  getAllBellsForUser,
  addNewBellForUser,
} = require("../queries/users_bells.js");

//INDEX
users_bells.get("/", async (req, res) => {
  const allUsersBells = await getAllUsersBells();
  if (allUsersBells[0]) {
    res.status(200).json({ payload: allUsersBells, success: true });
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// Read (Singular/Specific ID)
users_bells.get("/:user_id", async (req, res) => {
  const { user_id } = req.params;
  const user = await getUserBells(user_id);
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

users_bells.get("/:user_id/bells", async (req, res) => {
  const { user_id, bell_id } = req.params;
  const usersbellsBells = await getAllBellsForUser(user_id, bell_id);
  res.json(usersbellsBells);
});

users_bells.post("/:user_id/bells/:bell_id", async (req, res) => {
  const { user_id, bell_id } = req.params;
  const successfulAddBell = await addNewBellForUser(user_id, bell_id);
  if (successfulAddBell) {
    res.status(201).json({ message: "Bell for user created!" });
  } else {
    res.status(422).json({ error: "unprocessable entity" });
  }
});

// Create
users_bells.post("/", async (req, res) => {
  const { body } = req;
  // ONLY a successful post will return an object with a key of user_id
  body.user_id = body;

  try {
    const createdUserBell = await createUserBell(body.payload);
    if (createdUserBell.user_id) {
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
users_bells.put("/:id", async (req, res) => {
  const { user_id } = req.params;

  const updatedUserBell = await updateUserBell(req.body, user_id);
  console.log(updatedUserBell);
  if (updatedUserBell.user_id) {
    res.status(200).json(updatedUser);
  } else {
    res.status(404).json({ error: "user not found" });
  }
});

// Delete
users_bells.delete("/:id", async (req, res) => {
  const { user_id } = req.params;
  const deletedUserBell = await deleteUserBell(user_id);
  if (deletedUserBell.user_id) {
    res.status(200).json({ payload: deletedUser, success: true });
  } else {
    res.status(404).json({ payload: "User not found", success: false });
  }
});

module.exports = users_bells;
