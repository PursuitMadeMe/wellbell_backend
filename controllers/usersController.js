const express = require("express");
const users = express.Router();
const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../queries/users.js");

users.get("/", async (req, res) => {
  const allUsers = await getAllUsers();
  if (allUsers[0]) {
    res.status(200).json({ payload: allUsers, success: true });
  } else {
    res.status(500).json({ error: "server error" });
  }
});

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
// Create
users.post("/", async (req, res) => {
  const { body } = req;
// ONLY a successful post will return an object with a key of id
  body.email = body;

  try {
    const createdUser = await createUser(body.payload);
    if (createdUser.id) {
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

users.put("/:id", async (req, res) => {
  const { id } = req.params;

  const updatedUser = await updateUser(req.body, id);
  console.log(updatedUser);
  if (updatedUser.id) {
    res.status(200).json(updatedUser);
  } else {
    res.status(404).json({ error: "user not found" });
  }
});

users.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUser = await deleteUser(id);
  if (deletedUser.id) {
    res.status(200).json({ payload: deletedUser, success: true });
  } else {
    res.status(404).json({ payload: "User not found", success: false });
  }
});

module.exports = users;
