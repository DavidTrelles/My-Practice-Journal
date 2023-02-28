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

/**
 * POST route template
 */
router.post("/", (req, res) => {
  // POST route code here
});

module.exports = router;
