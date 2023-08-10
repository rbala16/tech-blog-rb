const { User } = require('../models');

const userData = [
  {
    username: 'rajni16bala',
    password: 'password1'
    
  },
  {
    username: 'gurdeep06singh',
    password: 'password2'
  },
  {
    username: 'anuradha29',
    password: 'passqord3'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;