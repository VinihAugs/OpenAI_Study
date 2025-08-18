const express = require('express');
const promptController = require('./controllers/prompt-controller');
const routes = express.Router();

// Corrigido: adicionada a barra inicial
routes.post('/api/prompt', promptController.sendText);

module.exports = routes;
