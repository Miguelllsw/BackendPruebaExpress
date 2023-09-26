const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    pclass: {
        type: Number,
    },
    survived: {
        type: Number,
    },
    name: {
        type: String,
    },
    sex: {
        type: String,
    },
    age: {
        type: Number,
    },
    sibsp: {
        type: Number,
    },
    parch: {
        type: Number,
    },
    ticket: {
        type: Number,
    },
    fare: {
        type: Number,
    },
    cabin: {
        type: String,
    },
    embarked: {
        type: String,
    },
    boat: {
        type: Number,
    },
    body: {
        type: String,
    },
    homedest: {
        type: String,
    }
});

module.exports = mongoose.model('User', userSchema);
