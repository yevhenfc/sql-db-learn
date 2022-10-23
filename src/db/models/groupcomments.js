'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GroupComments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      GroupComments.hasMany(models.Comment, {
        foreignKey: {field: 'groupCommentId'}
      });  
    }
  }
  GroupComments.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GroupComments',
  });
  return GroupComments;
};