const express = require('express');
const routes = express.Router();
const ContaController = require ('./controllers/ContaController');

routes.get('/contas',ContaController.index);
routes.post('/contas',ContaController.store);

module.exports = routes;