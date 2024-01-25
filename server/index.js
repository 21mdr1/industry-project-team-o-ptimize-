const express = require('express');
const app = express();
const cors = require('cors');
const knex = require('knex')(require('./knexfile'));
const PORT = process.env.PORT || 5050;
const CORS_ORIGIN = process.env.CORS_ORIGIN;

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})