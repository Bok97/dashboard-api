const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 

class DashboardUserSummary extends Model {}

DashboardUserSummary.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  totalUsers: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  totalMaleUsers: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  totalFemaleUsers: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  totalOtherUsers: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  ageBelow18: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  age18To24: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  age25To29: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  age30To34: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  age35To39: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  age40To44: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  age45To49: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  ageAbove50: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  stateJohor: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  stateKedah: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  stateKelantan: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  stateMelaka: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  stateNegeriSembilan: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  statePahang: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },  
  statePerak: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  statePerlis: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  statePulauPinang: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  stateSabah: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  stateSarawak: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  stateSelangor: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  stateTerengganu: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  stateKualaLumpur: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  sequelize, 
  modelName: 'DashboardUserSummary', 
  tableName: 'DashboardUserSummaries', 
  timestamps: true, 
});

module.exports = DashboardUserSummary;
