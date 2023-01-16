const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT;

const User = require('./src/models/db/userModel');

const userRouter = require('./src/routes/userRouter')(User);

app.listen(port, err => {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Server running in port: ' + port);
})

app.use('/api', userRouter);