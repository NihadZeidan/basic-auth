'use strict';

require('@code-fellows/supergoose');

const supertest = require('supertest');
// const basicAuth = require('../src/auth/basicAuth.js');
const base64 = require('base-64');

const server = require('../src/server.js');
const fakeServer = supertest(server.app);

// const basicAuth = require('../src/auth/basicAuth.js');



describe("Testing Sign-up Sign-In routes", () => {
    it('POST to /signup to create a new user', async() => {

        let user = { username: "Nihad", password: "1234" }

        let test = await fakeServer.post('/signup').send(user);


        expect(test.status).toEqual(201);
        expect(test.body.username).toEqual("Nihad");

    });

    it("POST to /signin to login as a user (use basic auth)", async() => {

        let encoding = `Basic ${base64.encode("Nihad:1234")}`
        let test = await fakeServer.post('/signin').set({ Authorization: encoding });

        expect(test.body.user.username).toEqual('Nihad')
        expect(test.status).toEqual(200)
    });
});