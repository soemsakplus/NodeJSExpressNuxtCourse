const Sequelize = require('sequelize');

const sequelize = new Sequelize('host_test', 'root', 'qwerty', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;