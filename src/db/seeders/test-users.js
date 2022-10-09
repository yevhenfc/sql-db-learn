'use strict';
const bcrypt = require('bcrypt');

function generateTestUsers() {
  const users = [];
  for (let i=0; i<100; i++){
    users.push({
      firstName: `Test${i}`,
      lastName: `Surname${i}`,
      email: `test${i}@mail.com`,
      login: `login${i}`,
      age: 20,
      passwordHash: bcrypt.hashSync(`admin${i}`, 10),
      createdAt: new Date(),
      updatedAt: new Date()
    })
  };
  return users;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", generateTestUsers(), {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  }
};
