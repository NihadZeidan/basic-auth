'user strict';

const singIn = require('./basicAuth.js')
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');




const usersSchema = mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },

});


// usersSchema.pre('hashing', async(next) => {

//     this.password = await bcrypt.hash(req.body.password, 10);
//     next();
// });


const Users = mongoose.model('user', usersSchema);


module.exports = Users