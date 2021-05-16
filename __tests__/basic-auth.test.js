'use strict';

require('@code-fellows/supergoose');
// const basicAuth = require('../src/auth/basicAuth.js');
const supertest = require('supertest');

const server = require('../src/server.js');
const fakeServer = supertest(server.app);

const base64 = require('base-64');
const { hash } = require('bcrypt');
const { head } = require('../src/routes/signInRout.js');



describe("TEST the Basic Auth middleware", () => {

    it('POST to /signup to create a new user', async() => {

        let user = { username: "Nihad", password: "1234" }

        let test = await fakeServer.post('/signup').send(user);


        expect(test.status).toEqual(201);
        expect(test.body.username).toEqual("Nihad");

    });

    it("Does the middleware function (send it a basic header)", async() => {

        let encoding = `Basic ${base64.encode("Nihad:1234")}`
        let test = await fakeServer.post('/signin').set({ Authorization: encoding });


        expect(test.body.user.username).toEqual('Nihad');
        expect(test.status).toEqual(200);
    });
});