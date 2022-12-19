const { User } = require("../../models");

const userData = [
  {
    username: "user1",
    email: "user1@email.com",
    password: "password1",
  },
  {
    username: "user2",
    email: "user2@email.com",
    password: "password2",
  },
  {
    username: "user3",
    email: "user3@email.com",
    password: "password3",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;