const express = require("express");
const sessions = express.Router();
const {
  getAllSessions,
  getSession,
  createSession,
  updateSession,
  deleteSession,
} = require("../queries/sessions.js");

//INDEX
sessions.get("/", async (req, res) => {
  const allSessions = await getAllSessions();
  if (allSessions[0]) {
    res.status(200).json({ payload: allSessions, success: true });
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// Read (Singular/Specific ID)
sessions.get("/:id", async (req, res) => {
  const { id } = req.params;
  const session = await getSession(id);
  if (session.id) {
    res.json({ payload: session, success: true });
  } else {
    res.status(404).json({
      payload: "not found",
      success: false,
      error: "session not found",
    });
  }
});

// Create
sessions.post("/", async (req, res) => {
  const { body } = req;

  body.reminder1 = body;

  try {
    const createdSession = await createSession(body.payload);
    if (createdSession.id) {
      res.status(200).json({
        success: true,
        payload: createdSession,
      });
    } else {
      res.status(422).json({
        success: false,
        payload: "Must include reminder1 field",
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// Update
sessions.put("/:id", async (req, res) => {
  const { id } = req.params;

  const updatedSession = await updateSession(req.body, id);
  console.log(updatedSession);
  if (updatedSession.id) {
    res.status(200).json(updatedSession);
  } else {
    res.status(404).json({ error: "session not found" });
  }
});

// Delete
sessions.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSession = await deleteSession(id);
  if (deletedSession.id) {
    res.status(200).json({ payload: deletedSession, success: true });
  } else {
    res.status(404).json({ payload: "session not found", success: false });
  }
});

module.exports = sessions;
