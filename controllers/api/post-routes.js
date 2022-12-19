const router = require("express").Router();
const sequelize = require("../../config/connection");
const excAuth = require("../../utils/auth");

const { Post, User, Comment } = require("../../models");

// Create a Post route
router.post("/", excAuth, (req, res) => {
  console.log(req.body);
  Post.create({ ...req.body, userId: req.session.user_id })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Update Post route by id
router.put("/:id", (req, res) => {
  Post.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "No post was found matching this id" });
        return;
      }
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

// delete Post route by post id
router.delete("/:id", (req, res) => {
  Post.destroy({
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

module.exports = router;