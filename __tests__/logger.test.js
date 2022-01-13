'use strict';

const server = require('../src/server.js');
const supertest = require('supertest');
const loggertest = require('../src/middleware/logger.js');
const request = supertest(server.app);

describe('Logger should log.', () => {

    console.log = jest.fn();

    loggertest();

    expect(console.log).toHaveBeenCalled();

    // it('Logger should console.log request.method and request.path.', async () => {
      
    // })
})

// https://stackoverflow.com/questions/49096093/how-do-i-test-a-jest-console-log