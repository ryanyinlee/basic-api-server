'use strict';

const sequelize = require("sequelize");

const People = (sequelize, DataTypes) => sequelize.define('People', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    yearOfBirth: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = People;