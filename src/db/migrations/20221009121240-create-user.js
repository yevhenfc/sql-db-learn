'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING,
        validate: {
          isAlpha: true
        }
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      login: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
        validate: {
          len: [6, 20]
        }
      },
      age: {
        type: Sequelize.INTEGER,
        validate: {
          min: 0
        }
      },
      passwordHash: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};