const Conta  = require('../../models/Conta');

module.exports = {
    async index(req,res){
        const contas = await Conta.find().sort('-createdAt');
        
        return res.json(contas);
    },
    async store(req,res){
        const {agencia,numero,saldo} = req.body;

        const conta = await Conta.create({
            agencia,
            numero,
            saldo,
        });

        return res.status(201).json(conta);
    }
}