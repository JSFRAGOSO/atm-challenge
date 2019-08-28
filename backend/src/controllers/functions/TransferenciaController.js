const Conta  = require('../../models/Conta');
const axios = require('axios');

module.exports = {
    async store(req,res){
        const {numagenciaorigem,numcontaorigem} = req.headers;
        const {valor,identificador} = req.body;
        const {numAgenciaDestino,numContaDestino} = req.params;
        const conta =  await Conta.findOne({
            $and:[
                {agencia: { $in:numagenciaorigem } },
                {numero: { $in:numcontaorigem } },
            ]
        });
        const contaDestino =  await Conta.findOne({
            $and:[
                {agencia: { $in:numAgenciaDestino } },
                {numero: { $in:numContaDestino } },
            ]
        });
        const configDebito = {
            method: "post",
            url: "http://localhost:3333/debito",
            headers:{},
            data: {"idConta":conta._id,"valor":valor}
        }
        const configMovimentoDebito = {
            method: "post",
            url: "http://localhost:3333/movimento",
            headers:{},
            data: {"identificador":identificador,
                   "valor":valor,
                   "idconta":conta._id}
        }; 
        const configCredito = {
            method: "post",
            url: "http://localhost:3333/credito",
            headers:{},
            data: {"id":contaDestino._id,"valor":valor}
        }
        const configMovimentoCredito = {
            method: "post",
            url: "http://localhost:3333/movimento",
            headers:{},
            data: {"identificador":identificador,
                   "valor":valor,
                   "idconta":contaDestino._id}
        };

        axios(configDebito);
        axios(configMovimentoDebito);
        axios(configCredito);
        axios(configMovimentoCredito);

        return res.json("Transferência efetuada com sucesso!");
    }
}
