`use strict`;

// const { response } = require('express');
const express = require('express');
const dotenv = require('dotenv');
const app = express();
const router = express.Router();

// routes
const gameRoutes = require('./routes/games.js');
const peopleRoutes = require('./routes/people.js');

const logger = require('./middleware/logger.js');
const notFound = require('./error-handlers/404.js');
const serverError = require('./error-handlers/500.js');

app.use(express.json());
app.use(gameRoutes);
app.use(peopleRoutes);

app.get('/', (request, response) => {
    console.log("hitting the home route with " + request.method);
    response.send('hitting the home route');
});

app.use(logger);
app.use(notFound);

// Make sure error handlers are below any middleware that would trigger next();
app.use(serverError);

module.exports = {
    start: (port) => {
        app.listen(port, () => {
            console.log('Server is listening on port: ' + port);
        });        
    }, app,
};