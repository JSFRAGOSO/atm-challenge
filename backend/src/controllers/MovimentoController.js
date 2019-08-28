const Movimento  = require('../models/Movimento');
const Conta  = require('../models/Conta');

module.exports = {
    async index(req,res){
        const movimento = await Movimento.find().sort('-createdAt');
        
        return res.json(movimento);
    },
    async store(req,res){
        const {identificador,valor,idconta} = req.body;
        const conta = await Conta.findById(idconta);
        
        const movimento = await Movimento.create({
            identificador,
            valor,
        });
        
        conta.movimentos.push(movimento._id);
        conta.save();

        return res.status(201).json(movimento);
    }
}
