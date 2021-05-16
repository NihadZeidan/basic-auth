'use strict';
require('dotenv').config();

const mongoose = require('mongoose');
const PORT = process.env.PORT;
const DataBase_URI = process.env.DataBase_URI;
const server = require('./src/server.js');





mongoose.connect(DataBase_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => {
        server.start(PORT);
        console.log("Connected to MongoDB");
    })
    .catch(e => console.error('Could not start server', e.message));