'use strict';

const server = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server.app);


// Update a record using PUT
// Destroy a record using DELETE

// TEST Create a record using POST
describe('TEST Create a record using POST', () => {

    it('Should be able to POST a record to the DB.', async () => {
        let response = await request.post('/game?title=galaga&releaseYear=1989');

        expect(response.status).toEqual(200);
        expect(response.body.title).toEqual('galaga');
        expect(response.body.releaseYear).toEqual('1989');
    })
})

// Read a list of records using GET
describe('TEST Get records using GET', () => {

    it('Should be able to GET a record from the DB.', async () => {
        let response = await request.get('/game');

        expect(response.status).toEqual(200);
        expect(response.body.title);
    })
})

// Read a record using GET

describe('TEST Get a single record using GET', () => {

    it('Should be able to GET a single record from the DB.', async () => {
        let response = await request.get('/game/1');

        expect(response.status).toEqual(200);
        expect(response.body.title);
        expect(response.body[0].id).toEqual(1);
    })
})

describe('Testing the 404 for routes!', () => {

    it('Should give a 404 on a bad route.', async () => {
        let response = await request.get('/fakeroute?name=test');

        expect(response.status).toEqual(404);
        
    })
})


describe('Testing the 404 for bad methods!', () => {

    it('Should give a 404 on a bad method.', async () => {
        let response = await request.delete('/peopler?name=test');

        expect(response.status).toEqual(404);
        
    })
})

// describe('Testing the 500 for no name!', () => {

//     it('Should give a 500 with no name in the query.', async () => {
//         let response = await request.post('/people?name=');

//         expect(response.status).toEqual(500);
        
//     })
// })

