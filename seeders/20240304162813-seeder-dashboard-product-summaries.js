'use strict';

const { QueryInterface } = require("sequelize");

module.exports = {
  /**
   * @param {QueryInterface} queryInterface 
   * @param {Sequelize} Sequelize 
   */
  async up(queryInterface, Sequelize) {
    const data = [];
    for (let i = 0; i < 200; i++) {
      const randomDay = Math.floor(Math.random() * 59) + 1;
      const date = new Date(2024, 0, randomDay);
      data.push({
        date: date.toISOString().split('T')[0],
        totalNikePrice: Math.random() * 1000,
        totalNikeQuantity: Math.floor(Math.random() * 100),
        totalAdidasPrice: Math.random() * 1000,
        totalAdidasQuantity: Math.floor(Math.random() * 100),
        totalPumaPrice: Math.random() * 1000,
        totalPumaQuantity: Math.floor(Math.random() * 100),
        totalUnderArmourPrice: Math.random() * 1000,
        totalUnderArmourQuantity: Math.floor(Math.random() * 100),
        totalLiNingPrice: Math.random() * 1000,
        totalLiNingQuantity: Math.floor(Math.random() * 100),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    await queryInterface.bulkInsert('DashboardProductSummaries', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('DashboardProductSummaries', {
      date: {
        [Sequelize.Op.between]: [new Date(2024, 0, 1), new Date(2024, 1, 29)]
      }
    }, {});
  }
};
