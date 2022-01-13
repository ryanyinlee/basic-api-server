'use strict';

const express = require('express');

const {PeopleModel}= require('../models');

const router = express.Router(); // object defines routing logic

router.get('/people', read)
router.get('/people/:id', read)
router.post('/people', create)
router.patch('/people/:id', update)
// router.put('/people/:id', update)
router.delete('/people/:id', remove)

async function read(req, res, next) {


console.log('Reading from people.');

let { id } = req.params;
let people;

if (id) {
    people = await PeopleModel.findOne({where: {id}});
} else {
    people = await PeopleModel.findAll();
}

let resObject = {
    count: people ? people.length : 1,
    results: people,
};

res.status(200).json(resObject);

}

// took syntax from: https://sequelize.org/v7/manual/model-querying-basics.html#simple-update-queries
// shared by Michael Metcalf in Remo
async function create(request, response, next) {
    
    console.log('Create person route hit.');

    let newPerson = await PeopleModel.create({ name: request.query.name, yearOfBirth: request.query.year});

    console.log(JSON.stringify(newPerson));

    response.status(200).send(newPerson);
    
}

    
async function update(request, response, next) {
        console.log('Update person route hit.');
        let { id } = request.params;
        let updatedPerson = await PeopleModel.update({ name: request.query.name, yearOfBirth: request.query.year}, { where: {id: id}});
        
        console.log(JSON.stringify(updatedPerson));

        response.status(200).send(updatedPerson);
}
    

async function remove(request, response, next) {
    console.log('Remove person route hit.');
    let { id } = request.params;
    await PeopleModel.destroy({
        where: {
            id: id
        }
    });

        response.status(200).send('Person removed. F in chat.');
}
    
    
    module.exports = router;