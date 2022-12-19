const { User } = require("../../models");

const userData = [
  {
    username: "testuser1",
    email: "testuser1@email.com",
    password: "password1",
  },
  {
    username: "testuser2",
    email: "testuser2@email.com",
    password: "password2",
  },
  {
    username: "testuser3",
    email: "testuser3@email.com",
    password: "password3",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;