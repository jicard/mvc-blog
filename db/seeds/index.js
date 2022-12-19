const sequelize = require("../../config/connection");
const commentSeed = require("./comment-seeds");
const postSeed = require("./posts-seeds");
const userSeed = require("./user-seeds");
const seedAll = async () => {
  await sequelize.sync({ force: true });
  await userSeed();
  await postSeed();
  await commentSeed();
  process.exit(0);
};

const excAuth = (req, res, next) => {
  if (!req.session.user_id) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = excAuth;
seedAll();