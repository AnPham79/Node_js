const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_js', 'root', '', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;