const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 

class DashboardProductSummary extends Model {}

DashboardProductSummary.init({
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
  totalNikePrice: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0
  },
  totalNikeQuantity: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  totalAdidasPrice: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0
  },
  totalAdidasQuantity: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  totalPumaPrice: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0
  },
  totalPumaQuantity: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  totalUnderArmourPrice: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0
  },
  totalUnderArmourQuantity: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  totalUnderArmour: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  totalUnderArmourPrice: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0
  },
  totalUnderArmourQuantity: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  totalLiNingPrice: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0
  },
  totalLiNingQuantity: {
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
  modelName: 'DashboardProductSummary', 
  tableName: 'DashboardProductSummaries', 
  timestamps: true, 
});

module.exports = DashboardProductSummary;
