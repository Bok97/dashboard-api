'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DashboardProductSummaries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      totalNikePrice: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: 0
      },
      totalNikeQuantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      totalAdidasPrice: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: 0
      },
      totalAdidasQuantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      totalPumaPrice: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: 0
      },
      totalPumaQuantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      totalUnderArmourPrice: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: 0
      },
      totalUnderArmourQuantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      totalLiNingPrice: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: 0
      },
      totalLiNingQuantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0
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

    await queryInterface.addIndex('DashboardProductSummaries', ['date'], {
      name: 'DashboardProductSummariesDateIndex'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeIndex('DashboardProductSummaries', 'DashboardProductSummariesDateIndex');

    await queryInterface.dropTable('DashboardProductSummaries');
  }
};
