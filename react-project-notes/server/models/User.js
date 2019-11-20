const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema  = new Schema({
    name: {
        type: String,
        requierd: true
        // max: 19,
        // min: 2
    },
    email: {
        type: String,
        required: true
        // min: 4,
        // max:20
    },
    password: {
        type: String,
        required: true,
        min: 3,
        max: 15
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('users', userSchema);
module.exports = User;
