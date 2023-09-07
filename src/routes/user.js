const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

/* GET USER */
router.get("/users", (req, res) => {
  const user = userSchema(req.body);
  user
    .find()
    .then((data) => res.json(data))
    .catch((error) =>
      res.json({
        message: error,
      })
    );
});

/* CREATE USER */
router.post("/users", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) =>
      res.json({
        message: error,
      })
    );
});

module.exports = router;
