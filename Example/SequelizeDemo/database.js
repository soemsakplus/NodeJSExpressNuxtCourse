const Sequelize = require('sequelize');

const sequelize = new Sequelize('api', 'guest', 'guest@abc', {
  dialect: 'mysql',
  host: '61.19.145.142',
  port: '6033'
});

module.exports = sequelize;

/*
server ip : 61.19.145.142
port : 6033
user : guest
pass : guest@abc
db name : api
tbl name : opdscreen
field ความดันตัวล่าง : dbp
field ความดันตัวบน : sbp
field ที่เป็น key ในการเชื่อม : vn
*/