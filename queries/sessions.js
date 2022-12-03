const db = require("../db/dbConfig.js");

const getAllSessions = async () => {
  try {
    const allSessions = await db.any(
      "SELECT * FROM sessions"
      // userId
    );
    return allSessions;
  } catch (err) {
    return err;
  }
};

const getSession = async (id) => {
  try {
    const session = await db.one("SELECT * FROM sessions WHERE id=$1", id);
    return session;
  } catch (err) {
    return err;
  }
};

const createSession = async (session) => {
  const {
    uuid,
    sessionnumber,
    reminder1,
    reminder2,
    reminder3,
    reminder4,
    reminder5,
  } = session;
  try {
    const createdSession = await db.one(
      "INSERT INTO sessions (uuid, sessionnumber, reminder1, reminder2, reminder3, reminder4, reminder5) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        uuid,
        sessionnumber,
        reminder1,
        reminder2,
        reminder3,
        reminder4,
        reminder5,
      ]
    );
    return createdSession;
  } catch (err) {
    return err;
  }
};

const deleteSession = async (id) => {
  try {
    const deletedSession = await db.one(
      "DELETE FROM sessions WHERE id =$1 RETURNING *",
      id
    );
    return deletedSession;
  } catch (err) {
    return err;
  }
};

const updateSession = async (id, session) => {
  const {
    uuid,
    sessionnumber,
    reminder1,
    reminder2,
    reminder3,
    reminder4,
    reminder5,
  } = session;

  try {
    const updatedSession = await db.one(
      "UPDATE sessions SET uuid=$1, sessionnumber=$2, reminder1=$3, reminder2=$4, reminder3=$5, reminder4=$6, reminder5=$7 WHERE id=$8 RETURNING *",
      [
        uuid,
        sessionnumber,
        reminder1,
        reminder2,
        reminder3,
        reminder4,
        reminder5,
        id,
      ]
    );
    return updatedSession;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllSessions,
  getSession,
  createSession,
  updateSession,
  deleteSession,
};
