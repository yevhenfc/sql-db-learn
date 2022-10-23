'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.Task, {
        foreignKey: {field: 'taskId'}
      })
      Comment.belongsTo(models.GroupComments, {
        foreignKey: {field: 'groupCommentId'}
      })
    }
  }
  Comment.init({
    name: DataTypes.STRING,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};