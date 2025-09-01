const express = require('express');
const cors = require('cors');
require('dotenv').config();
const data = require('./5-letter-words.json');

const app = express();

const corsOptions = {
    origin: 'http://localhost:5173'
}

app.use(cors(corsOptions));

app.get('/word', (req, res)=>{
    const word = data[Math.floor(Math.random() * data.length)];
    console.log(word);
    res.status(200).send({ word });
});

const port = process.env.PORT ?? 8080;

app.listen(port, ()=>console.log(`The app is listening on port ${port}`));