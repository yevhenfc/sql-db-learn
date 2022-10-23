'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Comments', 'groupCommentId', 
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'GroupComments',
        key: 'id'
      },
      field: 'groupCommentId',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Comments', 'groupCommentId')
  }
};

