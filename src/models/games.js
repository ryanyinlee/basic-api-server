'use strict';

const sequelize = require("sequelize");

const Game = (sequelize, DataTypes) => sequelize.define('Game', {
    title: {
        type: DataTypes.STRING,
        // allowNull: false,
    },

    releaseYear: {
        type: DataTypes.STRING,
        // allowNull: false,
    },
});

module.exports = Game;