const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
  if (req.isAuthenticated()) {
    const query = `SELECT * FROM "session" WHERE "user_id" = $1 ORDER BY "date" ASC`;
    pool
      .query(query, [req.user.id])
      .then((result) => {
        res.send(result.rows);
      })
      .catch((err) => {
        console.log("ERROR: Get all sessions", err);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
  // GET route code here
});
router.get("/:id", (req, res) => {
  if (req.isAuthenticated()) {
    console.log("hello from id request!", req.params.id);
    const queryText = `SELECT * FROM "session" WHERE id = $1`;
    let id = req.params.id;
    pool
      .query(queryText, [id])
      .then((result) => {
        console.log(result);
        res.send(result.rows);
      })
      .catch((err) => {
        console.log("ERROR: Getting the session", err);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});
/**
 * POST route template
 */
router.post("/", (req, res) => {
  const date = req.body.date;
  const title = req.body.title;
  const description = req.body.description;
  const link = req.body.link;
  const minutes = req.body.minutes;
  const notes = req.body.notes;
  const user_id = req.body.user_id;
  const queryText = `INSERT into "session" (date, title, description, link, minutes, notes, user_id)
  VALUES ($1, $2, $3, $4, $5, $6, $7)`;
  pool
    .query(queryText, [date, title, description, link, minutes, notes, user_id])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log("User registration failed: ", err);
      res.sendStatus(500);
    });
  // POST route code here
});

module.exports = router;
