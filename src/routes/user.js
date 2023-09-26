const express = require('express');
const router = express.Router();
const userSchema = require('../models/user');

router.post('/users', (req, res) => {
    const user = new userSchema(req.body);
    user.save()
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            console.log(error);
        });
});
module.exports = router;