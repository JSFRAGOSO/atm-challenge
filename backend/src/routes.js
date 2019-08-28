const express = require('express');
const routes = express.Router();
const ContaController = require ('./controllers/generator/ContaController');
const MovimentoController = require ('./controllers/generator/MovimentoController');
const Debito  = require('./controllers/generator/DebitoController');
const Credito  = require('./controllers/generator/CreditoController');
const Saque  = require('./controllers/functions/SaqueController');
const Deposito  = require('./controllers/functions/DepositoController');
const Transferencia  = require('./controllers/functions/TransferenciaController');
const Extrato  = require('./controllers/functions/ExtratoController');


routes.get('/contas',ContaController.index);
routes.post('/contas',ContaController.store);

routes.get('/movimentos',MovimentoController.index);
routes.post('/movimento',MovimentoController.store);

routes.post('/debito',Debito.store);
routes.post('/credito',Credito.store);

routes.post('/saque',Saque.store);
routes.post('/deposito',Deposito.store);

routes.post('/contas/:numAgenciaDestino/:numContaDestino/transferencia',Transferencia.store);

routes.get('/contas/:agencia/:numero/extrato',Extrato.index);




module.exports = routes;