const { Post } = require("../../models");

const postData = [
  {
    title: "Stitious",
    body: "I'm not superstitious, but I am a little stitious.",
    user_id: 1,
  },
  {
    title: "Feared or loved?",
    body: "Would I rather be feared or loved? Easy, both. I want people to be afraid of how much they love me.",
    user_id: 2,
  },
  {
    title: "Job vs Career",
    body: "Right now, this is just a job. If I advance any higher in this company, this would be my career. And, if this were my career, I'd have to throw myself in front of a train.",
    user_id: 3,
  },
  {
    title: "Kevin's Mood",
    body: "I just want to lie on the beach and eat hot dogs.",
    user_id: 1,
  },
  {
    title: "Millenial Mantra",
    body: "I'm such a perfectionist that I'd kinda rather not do it at all, than do a crappy version.",
    user_id: 2,
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;