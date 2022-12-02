const express = require("express");
const bells = express.Router();
const {
  getAllBells,
  getBell,
  createBell,
  updateBell,
  deleteBell,
} = require("../queries/bells.js");

bells.get("/", async (req, res) => {
  const allBells = await getAllBells();
  if (allBells[0]) {
    res.status(200).json({ payload: allBells, success: true });
  } else {
    res.status(500).json({ error: "server error" });
  }
});

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

bells.post("/", async (req, res) => {
  const { body } = req;

  body.name = body;

  try {
    const createdBell = await createBell(body.payload);
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

bells.put("/:id", async (req, res) => {
  const { id } = req.params;

  const updatedBell = await updateBell(req.body, id);
  console.log(updatedBell);
  if (updatedBell.id) {
    res.status(200).json(updatedBell);
  } else {
    res.status(404).json({ error: "bell not found" });
  }
});

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
