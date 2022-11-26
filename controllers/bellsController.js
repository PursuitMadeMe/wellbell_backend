const express = require("express");
const bells = express.Router();
const { getAllBells, 
  getBell,
  createBell,
  updateBell,
  deleteBell } = require("../queries/bells.js");

//INDEX
bells.get("/", async (req, res) => {
  const allBells = await getAllBells();
  if (allBells[0]) {
    res.status(200).json({ payload: allBells, success: true });
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// Read (Singular/Specific ID)
bells.get("/:id", async (req, res) => {
  const { id } = req.params;
  const bell = await getBell(id);
  if (bell.id) {
    res.json({ payload: bell, success: true });
  } else {
    res.status(404).json({
      payload: "not found",
      success: false,
      error: "bell not found",
    });
  }
});

// Create
bells.post("/", async (req, res) => {
  const { body } = req;
  console.log(body)

  body.name = (body);

  try {
    const createdBell = await createBell(body);
    console.log(createdBell)
    if (createdBell.id) {
      res.status(200).json({
        success: true,
        payload: createdBell,
      });
    } else {
      res.status(422).json({
        success: false,
        payload: "Must include name field",
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// Update
bells.put("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id)
  const { body } = req;
  console.log(body)

  body.name = (body);

  const updatedBell = await updateBell(body, id);
  console.log(updatedBell)
  if (updatedBell.id) {
    res.status(200).json(updatedBell);
  } else {
    res.status(404).json({ error: "bell not found" });
  }
});

// Delete
bells.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedBell = await deleteBell(id);
  if (deletedBell.id) {
    res.status(200).json({ payload: deletedBell, success: true });
  } else {
    res.status(404).json({ payload: "Bell not found", success: false });
  }
});

module.exports = bells;
