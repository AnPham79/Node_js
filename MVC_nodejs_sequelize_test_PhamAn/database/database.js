const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodejs_mvc_sequelize_test_phaman', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;