const { Comment } = require("../../models");

const commentData = [
  {
    user_id: 2,
    post_id: 1,
    body: "Whenever I'm about to do something, I think, 'Would an idiot do that?', and if they would, I do not do that thing.",
  },
  {
    user_id: 2,
    post_id: 1,
    body: "Always the Padawan, never the Jedi.",
  },
  {
    user_id: 3,
    post_id: 2,
    body: "There's too many people on this Earth. We need a new plague.",
  },
  {
    user_id: 3,
    post_id: 2,
    body: "Today, smoking is gonna save lives.",
  },
  {
    user_id: 1,
    post_id: 3,
    body: "You couldn't handle my undivided attention.",
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;