'use strict';
require('dotenv').config();

const {start} = require('./src/server.js');
const {db} = require('./src/models');
const server = require('./src/server.js');

//server.start(process.env.PORT || 3000);

db.sync()
    .then(()=> start(process.env.PORT || 3000))
    .catch(error=> console.log(error));