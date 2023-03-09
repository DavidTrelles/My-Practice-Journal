const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
  if (req.isAuthenticated()) {
    const query = `SELECT * FROM "session" WHERE "user_id" = $1 ORDER BY "id" DESC`;
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
    const queryText = `SELECT * FROM "session" WHERE id = $1 AND user_id = ${req.user.id}`;
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
  console.log(req.body);
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
      console.log("session post failed: ", err);
      res.sendStatus(500);
    });
  // POST route code here
});

router.delete("/:id", (req, res) => {
  console.log("hello from delete request!", req.params.id);
  const queryText = `DELETE from "session" WHERE id = ${req.params.id};`;
  pool
    .query(queryText)
    .then((result) => {
      console.log(result);
      res.sendStatus(204);
    })
    .catch((error) => {
      console.log("error making a query", error);
    });
});

//put route goes here
router.put("/", (req, res) => {
  console.log(req.body);
  const date = req.body.date;
  const title = req.body.title;
  const description = req.body.description;
  const link = req.body.link;
  const minutes = Number(req.body.minutes);
  const notes = req.body.notes;
  const user_id = Number(req.body.user_id);
  const id = Number(req.body.id);
  const queryText = `UPDATE "session" SET "date" = $1, "title" = $2, "description" = $3, "link" = $4, "minutes" = $5, "notes" = $6, "user_id" = $7 WHERE "id" = $8`;
  pool
    .query(queryText, [
      date,
      title,
      description,
      link,
      minutes,
      notes,
      user_id,
      id,
    ])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log("session post failed: ", err);
      res.sendStatus(500);
    });
});

module.exports = router;
