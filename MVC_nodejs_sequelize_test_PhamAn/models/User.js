const Sequelzie = require('sequelize');

const sequelize = require('../database/database');

const User = sequelize.define('users' , {
    id : {
        type: Sequelzie.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_name: Sequelzie.DataTypes.STRING,
    email: Sequelzie.DataTypes.STRING,
    password: Sequelzie.DataTypes.STRING
})

module.exports = User;