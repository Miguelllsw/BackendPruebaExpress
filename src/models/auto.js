const mongoose = require('mongoose');

const autoSchema = new mongoose.Schema({

    symboling: {
        type: Number,
    },
    normalizedlosses: {
        type: String,
    },
    make: {
        type: String,
    },
    fueltype: {
        type: String,
    },
    aspiration: {
        type: String,
    },
    numofdoors: {
        type: String,
    },
    bodystyle: {
        type: String,
    },
    drivewheels: {
        type: String,
    },
    enginelocation: {
        type: String,
    },
    wheelbase: {
        type: Number,
    },
    length: {
        type: Number,
    },
    width: {
        type: Number,
    },
    height: {
        type: Number,
    },
    curbweight: {
        type: Number,
    },
    enginetype: {
        type: String,
    },
    numofcylinders: {
        type: String,
    },
    enginesize: {
        type: Number,
    },
    fuelsystem: {
        type: String,
    },
    bore: {
        type: String,
    },
    stroke: {
        type: String,
    },
    compressionratio: {
        type: Number,
    },
    horsepower: {
        type: String,
    },
    peakrpm: {
        type: String,
    },
    citympg: {
        type: Number,
    },
    highwaympg: {
        type: Number,
    },
    price: {
        type: String,
    }
});

module.exports = mongoose.model('Auto', autoSchema);