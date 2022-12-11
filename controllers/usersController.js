const express = require("express");
const users = express.Router();

// we are destructuring the object exported from users.js

const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  // getAllBellsForUser,
  // addNewBellForUser,
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
users.get("/:user_id", async (req, res) => {
  const { user_id } = req.params;
  const user = await getUser(user_id);
  console.log(req.body);
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

// users.get("/:user_id/bells", async (req, res) => {
//   const { user_id, bell_id } = req.params;
//   const usersBells = await getAllBellsForUser(user_id, bell_id);
//   res.json(usersBells);
// });

// users.post("/:user_id/bells/:bell_id", async (req, res) => {
//   const { user_id, bell_id } = req.params;
//   const successfulAdd = await addNewBellForUser(user_id, bell_id);
//   if (successfulAdd) {
//     res.status(201).json({ message: "Bell for user created!" });
//   } else {
//     res.status(422).json({ error: "unprocessable entity" });
//   }
// });

// Create
users.post("/", async (req, res) => {
  const { body } = req;
  // ONLY a successful post will return an object with a key of id
  console.log(req.body);
  try {
    const createdUser = await createUser(body);
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
users.put("/:user_id", async (req, res) => {
  const { user_id } = req.params;

  body.user_id = body;

  const updatedUser = await updateUser(req.body, user_id);
  console.log(updatedUser);
  if (updatedUser.user_id) {
    res.status(200).json(updatedUser);
  } else {
    res.status(404).json({ error: "user not found" });
  }
});

// Delete
users.delete("/:id", async (req, res) => {
  const { user_id } = req.params;
  const deletedUser = await deleteUser(user_id);
  if (deletedUser.user_id) {
    res.status(200).json({ payload: deletedUser, success: true });
  } else {
    res.status(404).json({ payload: "User not found", success: false });
  }
});

module.exports = users;
