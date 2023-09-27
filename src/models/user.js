const mongoose = require('mongoose');

const puertasVentanasSchema = new mongoose.Schema({

    itemId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    nameComplete: {
        type: String,
        required: true,
    }

});

module.exports = mongoose.model('Puertas-ventanas-y-molduras', puertasVentanasSchema);
