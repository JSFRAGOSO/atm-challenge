const Conta = require('../../models/Conta');
const axios = require('axios');

module.exports = {
    async store(req,res){
        var movimento = {};
        var credito = {};
        const {numAgencia,numConta,valorDeposito} = req.body;

        const conta =  await Conta.findOne({
            $and:[
                {agencia: {$in:numAgencia}},
                {numero: {$in:numConta }},
            ]
        });

        const configCredito = {
            method: "post",
            url: "http://localhost:3333/credito",
            headers:{},
            data: {"id":conta._id,"valor":valorDeposito}
        }

        const configMovimento = {
            method: "post",
            url: "http://localhost:3333/movimento",
            headers:{},
            data: {"identificador":"DEPOSITO EM CONTA CORRENTE",
                   "valor":valorDeposito,
                   "idconta":conta._id}
        };

        await axios(configCredito).then((response)=>{
            credito = response.status;    
        });
        
        console.log(credito);

        await axios(configMovimento).then((response)=>{
            movimento = response.data;    
        });
        return res.json(movimento);
    }
};
