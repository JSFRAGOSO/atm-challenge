const axios = require('axios');
const Conta  = require('../../models/Conta');

module.exports = {
    async store(req,res){
        const {numAgencia,numConta,valorsaque} = req.body;
        
        const conta =  await Conta.findOne({
            $and:[
                {agencia: { $in:numAgencia } },
                {numero: { $in:numConta } },
            ]
        });
        
        const configDebito = {
            method: "post",
            url: "http://localhost:3333/debito",
            headers:{},
            data: {"idConta":conta._id,"valor":valorsaque}
        }

        const configMovimento = {
            method: "post",
            url: "http://localhost:3333/movimento",
            headers:{},
            data: {"identificador":"SAQUE EM CONTA CORRENTE",
                   "valor":valorsaque,
                   "idconta":conta._id}
        };
        
        axios(configDebito);
        axios(configMovimento);

        return res.json("Saque efetuado com sucesso!");
    }
}


