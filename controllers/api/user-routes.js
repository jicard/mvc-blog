const router = require("express").Router();
const excAuth = require("../../utils/auth");

const { User, Post, Comment } = require("../../models");

// *create a user route
router.post("/", (req, res) => {
  User.create({ ...req.body })
    .then((data) => {
      req.session.user_id = data.id;
      res.json(res);
    })
    .catch((err) => res.status(500).json(err));
});

// *update user route by user id
router.put("/:id", (req, res) => {
  User.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "No user was found matching this id" });
        return;
      }
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

// *delete user route
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

// *login route
router.post("/login", (req, res) => {
  User.findOne({
    where: { username: req.body.username },
    raw: true,
  })
    .then((data) => {
      if (!data) {
        res
          .status(400)
          .json({ message: "User does not exist with this username" });
      }
      console.log(data);
      let validPw;
      if (data.password === req.body.password) {
        validPw = true;
      }
      if (!validPw) {
        res.status(400).json({ message: "Invalid password" });
        return;
      }
      req.session.user_id = data.id;
      console.log(req.session);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.status(400);
    });
});
// *logout route

module.exports = router;