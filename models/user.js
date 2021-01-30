const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    UserName: { type: String, required: true },
    Password: { type: String, required: true }
})
let user = mongoose.model('User', UserSchema)
module.exports = user;