const express = require('express');
const router = express.Router();
const autoSchema = require('../models/auto');

router.get('/auto', (req, res) => {
    autoSchema.find()
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            console.log(error);
        });
    
});

module.exports = router;