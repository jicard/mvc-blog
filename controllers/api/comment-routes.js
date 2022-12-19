const router = require("express").Router();

const { Comment } = require("../../Models");
const excAuth = require("../../utils/auth");

// Create a comment route
router.post("/", excAuth, (req, res) => {
  Comment.create({ ...req.body, userId: req.session.user_id })
    .then((res) => res.json(res))
    .catch((err) => res.status(500).json(err));
});
module.exports = router;