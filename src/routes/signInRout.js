'use strict'

const express = require('express');
const router = express.Router();

const basicAuth = require('../auth/basicAuth.js');

router.post('/signin', basicAuth, (req, res) => {
    let data = req.userdata;

    res.status(200).json({ user: data });
});

module.exports = router