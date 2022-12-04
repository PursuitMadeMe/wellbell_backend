const express = require("express");
const users = express.Router();

// we are destructuring the object exported from users.js

const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getAllBellsForUser,
  addNewBellForUser,
} = require("../queries/users.js");

//INDEX
users.get("/", async (req, res) => {
  const allUsers = await getAllUsers();
  if (allUsers[0]) {
    res.status(200).json({ payload: allUsers, success: true });
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// Read (Singular/Specific ID)
users.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await getUser(id);
  if (user.id) {
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

users.get("/:id/bells", async (req, res) => {
  const { id } = req.params;
  const usersBells = await getAllBellsForUser(id);
  res.json(usersBells);
});

users.post("/:id/bells/:bellId", async (req, res) => {
  const { id, bellId } = req.params;
  const successfulAdd = await addNewBellForUser(id, bellId);
  if (successfulAdd) {
    res.status(201).json({ message: "Bell for user created!" })
  } else {
      res.status(422).json({ error: "unprocessable entity" });
    }
});

// Create
users.post("/", async (req, res) => {
  const { body } = req;
  // ONLY a successful post will return an object with a key of id
  body.user_id = body;

  try {
    const createdUser = await createUser(body.payload);
    if (createdUser.user_id) {
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
users.put("/:id", async (req, res) => {
  const { id } = req.params;

  const updatedUser = await updateUser(req.body, id);
  console.log(updatedUser);
  if (updatedUser.user_id) {
    res.status(200).json(updatedUser);
  } else {
    res.status(404).json({ error: "user not found" });
  }
});

// Delete
users.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUser = await deleteUser(id);
  if (deletedUser.user_id) {
    res.status(200).json({ payload: deletedUser, success: true });
  } else {
    res.status(404).json({ payload: "User not found", success: false });
  }
});

module.exports = users;
