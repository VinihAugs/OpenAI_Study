const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json({ limit: '1mb' }));

app.use(routes); // monta todas as rotas

module.exports = app;
