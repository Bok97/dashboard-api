const { Sequelize } = require('sequelize');
const { dbConfig } = require('./config');

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: 'postgres',
});

module.exports = sequelize;
