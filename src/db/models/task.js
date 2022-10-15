'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      Task.belongsTo(models.User, {
        foreignKey: {field: 'userId'},
        as: 'owner'
      })
    }
  }
  Task.init({
    name: DataTypes.STRING,
    isDone: DataTypes.BOOLEAN,
    deadline: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};