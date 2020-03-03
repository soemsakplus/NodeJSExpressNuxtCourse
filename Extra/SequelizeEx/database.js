const Sequelize = require('sequelize');

const sequelize = new Sequelize('node', 'root', 'qwerty', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;