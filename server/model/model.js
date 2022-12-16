const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    rollNumber: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: String,
    languages: {
        type: String,
        required: true
    },
    githubUsername: {
        type: String,
        required: true,
        unique: true
    }
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;