const express = require('express');
const cors = require('cors');
require('dotenv').config()

const app = express();

const corsOptions = {
    origin: 'http://localhost:5173'
}

app.use(cors(corsOptions));

const port = process.env.PORT ?? 6969;

app.listen(port, ()=>console.log(`The app is listening on port ${port}`));