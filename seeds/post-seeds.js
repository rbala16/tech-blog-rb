const { Post } = require('../models');

const postData = [
  {
    title: 'Why MVC is so important',
    content: 'MVC allows developers to maintain a true sepration of concerns,devising their code between the Model layer for data,the View layer for design ,and the Controller layer for application logic.',
    user_id: 1
    
  },
  {
    title: 'Authentication vs. Authorization',
    content: 'The is a difference between authentication and authorization .Authentication means confirming your own identity whereas authorization means being allowed access to system.',
    user_id: 2
  },
  {
    title: 'Object-Related Maping',
    content: 'I have really loved learning about ORMs.It really simplified the way I created queries in SQL!',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;