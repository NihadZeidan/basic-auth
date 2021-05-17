'use strict';
const Users = require('../auth/usersSchema.js');

const express = require('express');
const base64 = require('base-64')

const bcrypt = require('bcrypt');

const router = express.Router();


router.post('/signup', async(req, res) => {

    try {

        const user = new Users(req.body);
        const record = await user.save();
        res.status(201).json(record);
    } catch (e) { res.status(403).send("Error Creating User"); }
});


module.exports = router;