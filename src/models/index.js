"use strict";

require('dotenv').config();
const { Sequelize, DataTypes } = require("sequelize");
// const POSTGRES_URI = process.env.POSTGRES_URI || 'sqlite:memory';
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory';
// const DATABASE_URL = process.env.DATABASE_URL;

const gameSchema = require("./games.js");
const peopleSchema = require("./people.js");

let db = new Sequelize(DATABASE_URL, {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

const GameModel = gameSchema(db, DataTypes);
const PeopleModel = peopleSchema(db, DataTypes);

module.exports = {
    db,
    GameModel,
    PeopleModel
};
