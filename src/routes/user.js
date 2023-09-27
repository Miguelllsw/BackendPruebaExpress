const express = require('express');
const router = express.Router();
const puertasVentanasSchema = require('../models/user');

router.get('/puertas-ventanas-y-molduras', (req, res) => {
    puertasVentanasSchema.find()
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.post('/puertas-ventanas-y-molduras', (req, res) => {
    const puertas = new puertasVentanasSchema(req.body);
    puertas.save()

        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            console.log(error);
        });
});

module.exports = router;