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
        totalUsers: Math.floor(Math.random() * 1000),
        totalMaleUsers: Math.floor(Math.random() * 500),
        totalFemaleUsers: Math.floor(Math.random() * 500),
        totalOtherUsers: Math.floor(Math.random() * 100),
        ageBelow18: Math.floor(Math.random() * 100),
        age18To24: Math.floor(Math.random() * 100),
        age25To29: Math.floor(Math.random() * 100),
        age30To34: Math.floor(Math.random() * 100),
        age35To39: Math.floor(Math.random() * 100),
        age40To44: Math.floor(Math.random() * 100),
        age45To49: Math.floor(Math.random() * 100),
        ageAbove50: Math.floor(Math.random() * 100),
        stateJohor: Math.floor(Math.random() * 100),
        stateKedah: Math.floor(Math.random() * 100),
        stateKelantan: Math.floor(Math.random() * 100),
        stateMelaka: Math.floor(Math.random() * 100),
        stateNegeriSembilan: Math.floor(Math.random() * 100),
        statePahang: Math.floor(Math.random() * 100),
        statePerak: Math.floor(Math.random() * 100),
        statePerlis: Math.floor(Math.random() * 100),
        statePulauPinang: Math.floor(Math.random() * 100),
        stateSabah: Math.floor(Math.random() * 100),
        stateSarawak: Math.floor(Math.random() * 100),
        stateSelangor: Math.floor(Math.random() * 100),
        stateTerengganu: Math.floor(Math.random() * 100),
        stateKualaLumpur: Math.floor(Math.random() * 100),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    await queryInterface.bulkInsert('DashboardUserSummaries', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('DashboardUserSummaries', {
      date: {
        [Sequelize.Op.between]: [new Date(2024, 0, 1), new Date(2024, 1, 29)]
      }
    }, {});
  }
};
