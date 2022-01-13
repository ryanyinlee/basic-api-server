'use strict';

const express = require('express');

const {GameModel}= require('../models');

const router = express.Router(); // object defines routing logic

router.get('/game', read)
router.get('/game/:id', read)
router.post('/game', create)
router.patch('/game/:id', update)
router.delete('/game/:id', remove)


async function read(request, response, next) {

    console.log('Reading from games.');
    
    let { id } = request.params;
    let games;
    
    if (id) {
        games = await GameModel.findOne({where: {id}});
    } else {
        games = await GameModel.findAll();
    }
    
    let resObject = {
        count: games ? games.length : 1,
        results: games,
    };
    
    response.status(200).json(resObject);
    
}
    
// took syntax from: https://sequelize.org/v7/manual/model-querying-basics.html#simple-update-queries
// shared by Michael Metcalf in Remo
async function create(request, response, next) {
    
    console.log('Create game route hit.');

    let newGame = await GameModel.create({ title: request.query.title, releaseYear: request.query.releaseYear});

    console.log(JSON.stringify(newGame));

    response.status(200).send(newGame);
    
}

    
async function update(request, response, next) {
        console.log('Update game route hit.');
        let { id } = request.params;
        let updatedGame = await GameModel.update({ title: request.query.title, releaseYear: request.query.releaseYear}, { where: {id: id}});
        
        console.log(JSON.stringify(updatedGame));

        response.status(200).send(updatedGame);
}
    

async function remove(request, response, next) {
    console.log('Remove game route hit.');
    let { id } = request.params;
    await GameModel.destroy({
        where: {
            id: id
        }
    });

        response.status(200).send('Game removed.');
}
    
    
    module.exports = router;