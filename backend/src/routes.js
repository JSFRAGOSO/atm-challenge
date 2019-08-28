const express = require('express');
const routes = express.Router();
const ContaController = require ('./controllers/generator/ContaController');
const MovimentoController = require ('./controllers/generator/MovimentoController');
const Debito  = require('./controllers/generator/DebitoController');
const Credito  = require('./controllers/generator/CreditoController');
const Saque  = require('./controllers/functions/SaqueController');
const Deposito  = require('./controllers/functions/DepositoController');
const Transferencia  = require('./controllers/functions/TransferenciaController');


routes.get('/contas',ContaController.index);
routes.post('/contas',ContaController.store);

routes.get('/movimentos',MovimentoController.index);
routes.post('/movimento',MovimentoController.store);

routes.post('/debito',Debito.store);
routes.post('/credito',Credito.store);

routes.post('/saque',Saque.store);
routes.post('/deposito',Deposito.store);

routes.post('/transferencia/:numAgenciaDestino/:numContaDestino',Transferencia.store);




module.exports = routes;