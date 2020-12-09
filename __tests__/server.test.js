'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('Web server', () => {
    it('should respond with a 404 on bad route', () => {
        return mockRequest
        .get('/bananas')
        .then(results => {
            expect(results.status).toBe(404)
        }) .catch(console.error);
    })
    // it('should respond with a 500', () => {
    //     return mockRequest
    //     .get('/person')
    //     .then(results => {
    //         expect(results.status).toBe(500)
    //     }) .catch(console.error);
    // })
    it('should respond with a 404 on bad method', () => {
        return mockRequest
        .post('/person')
        .then(results => {
            expect(results.status).toBe(404)
        }) .catch(console.error);
    })
    // it('should respond with a 200', () => {
    //     return mockRequest
    //     .get('/person')
    //     .send({name: 'Fred'})
    //     .then(results => {
    //         expect(results.status).toBe(200)
    //     }) .catch(console.error);
    // })
})

