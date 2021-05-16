'use strict';

const Users = require('./usersSchema.js');
const bcrypt = require('bcrypt');
const base64 = require('base-64');


module.exports = async(req, res, next) => {

    let basicHeaderParts = req.headers.authorization.split(' ');

    let encodedString = basicHeaderParts.pop();
    let decodedString = base64.decode(encodedString);
    let [username, password] = decodedString.split(':');

    try {
        const oneUser = await Users.findOne({ username: username });
        const valid = await bcrypt.compare(password, oneUser.password);

        if (valid) {
            req.userdata = oneUser;
            next();
        } else {
            next(error);
        }
    } catch (error) { res.status(403).send("Invalid Login"); }

};