// const express = require('express');
import express from 'express';
import userRoutes from './routes/userRoutes.js';

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

app.use('/auth', userRoutes);



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

