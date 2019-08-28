const express = require('express');
const routes = express.Router();
const ContaController = require ('./controllers/ContaController');
const MovimentoController = require ('./controllers/MovimentoController');
const Debito  = require('./controllers/DebitoController');
const Credito  = require('./controllers/CreditoController');
const Saque  = require('./controllers/SaqueController');
const Deposito  = require('./controllers/DepositoController');


routes.get('/contas',ContaController.index);
routes.post('/contas',ContaController.store);

routes.get('/movimentos',MovimentoController.index);
routes.post('/movimento',MovimentoController.store);

routes.post('/debito',Debito.store);
routes.post('/credito',Credito.store);

routes.post('/saque',Saque.store);
routes.post('/deposito',Deposito.store);


module.exports = routes;