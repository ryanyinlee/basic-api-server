'use strict';

const server = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server.app);

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

    it('Should be able to GET records from the DB.', async () => {
        let response = await request.get('/game');

        expect(response.status).toEqual(200);
        expect(response.body.title);
    })
})

// Read a record using GET
describe('TEST Get a single record using GET', () => {

    it('Should be able to GET a single record from the DB.', async () => {

        let game = await request.get('/game');   
        let gameId = game.body.results[0].id

        let response = await request.get('/game');   
                
        //console.log("games object " + JSON.stringify(response.body.results[0].title));
      
        expect(response.status).toEqual(200);
        expect(response.body.results[0].id).toEqual(gameId);
    })
})

// Update a record using POST
describe('TEST Updating a single record using PATCH', () => {

    it('Should be able to update a single record from the DB using PATCH.', async () => {

        let game = await request.get('/game');   
        let gameId = game.body.results[0].id

        await request.patch('/game/'+gameId+'?title=test&releaseYear=9999');
        let response = await request.get('/game/'+gameId);
        expect(response.status).toEqual(200);
        expect(response.body.results.title).toEqual('test');
        expect(response.body.results.releaseYear).toEqual('9999');
    })
})

// Destroy a record using DELETE
describe('TEST Deleting a single record using DESTROY', () => {

    it('Should be able to remove a single record from the DB using DESTROY.', async () => {
        let game = await request.get('/game');   
        let gameId = game.body.results[0].id
        let response = await request.delete('/game/'+gameId);
        expect(response.status).toEqual(200);
        // let checkSpot = await request.get('/game/'+ gameId);
       
        // expect(checkSpot.body.results.title).toBe(null);
    })
})


// 404 Tests
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

