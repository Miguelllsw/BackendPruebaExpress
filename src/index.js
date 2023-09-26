const express = require('express');
require("dotenv").config();
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');

const app = express();
const port = 3000;

app.use('/api', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

mongoose.connect('mongodb://127.0.0.1:27017/Titanic', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

