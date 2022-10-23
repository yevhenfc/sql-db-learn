'use strict';
import {ROLES} from '../../constants.js'

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Role.belongsToMany(User, { through: 'UserRoles'});
    }
  }
  Role.init({
    name: DataTypes.ENUM(...Object.vslues(ROLES)),
    allowNull: false
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};