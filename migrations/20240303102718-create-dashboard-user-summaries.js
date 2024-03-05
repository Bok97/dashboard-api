'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('DashboardUserSummaries', {
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
      totalUsers: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      totalMaleUsers: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      totalFemaleUsers: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      totalOtherUsers: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      ageBelow18: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      age18To24: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      age25To29: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      age30To34: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      age35To39: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      age40To44: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      age45To49: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      ageAbove50: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      stateJohor: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      stateKedah: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      stateKelantan: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      stateMelaka: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      stateNegeriSembilan: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      statePahang: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },  
      statePerak: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      statePerlis: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      statePulauPinang: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      stateSabah: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      stateSarawak: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      stateSelangor: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      stateTerengganu: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      stateKualaLumpur: {
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

    await queryInterface.addIndex('DashboardUserSummaries', ['date'], {
      name: 'DashboardUserSummariesDateIndex'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeIndex('DashboardUserSummaries', 'DashboardUserSummariesDateIndex');

    await queryInterface.dropTable('DashboardUserSummaries');
  }
};
