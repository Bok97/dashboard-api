const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize, 
  modelName: 'User', 
  tableName: 'Users', 
  timestamps: true, 
});

module.exports = User;
