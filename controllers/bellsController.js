const express = require("express");
const bells = express.Router();
const { getAllBells, 
  getBell,
  createBell,
  updateBell,
  deleteBell, } = require("../queries/bells.js");

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

  body.name = checkName(body);

  try {
    const createdApparel = await createBell(body);
    if (createdApparel.id) {
      res.status(200).json({
        success: true,
        payload: createdApparel,
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
  const { body } = req;

  body.name = checkName(body);

  const updatedApparel = await updateBell(body, id);
  if (updatedApparel.id) {
    res.status(200).json(updatedApparel);
  } else {
    res.status(404).json({ error: "bell not found" });
  }
});

// Delete
bells.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedApparel = await deleteApparel(id);
  if (deletedApparel.id) {
    res.status(200).json({ payload: deletedApparel, success: true });
  } else {
    res.status(404).json({ payload: "not found", success: false });
  }
});

module.exports = bells;
