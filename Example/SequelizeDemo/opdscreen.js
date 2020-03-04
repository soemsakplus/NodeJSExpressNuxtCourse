const Sequelize = require('sequelize');
const sequelize = require('./database');

const OpdScreen = sequelize.define('opdscreen', {
  // hos_guid: {
  //   type: Sequelize.STRING,
  //   allowNull: false
  // },
  vn: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },
  hn: {
    type: Sequelize.STRING,
    allowNull: false
  },
  vstdate: Sequelize.DATE,
  bpd: {
    type: Sequelize.DOUBLE
  },
  bps: {
    type: Sequelize.DOUBLE
  }
},
{
  freezeTableName: true,
  timestamps: false
}
);

module.exports = OpdScreen;