const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const autoRoutes = require('./routes/auto');

const app = express();
const port = 3000;
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', autoRoutes);

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

