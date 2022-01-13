'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const POSTGRES_URI = process.env.POSTGRES_URI || 'sqlite:memory';

const gameSchema = require('./games.js');
const peopleSchema = require('./people.js');

let db = new Sequelize(POSTGRES_URI);

const GameModel = gameSchema(db, DataTypes);
const PeopleModel = peopleSchema(db, DataTypes);

module.exports = {
    db,
    GameModel,
    PeopleModel,
};