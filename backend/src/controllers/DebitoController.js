const Conta  = require('../models/Conta');

module.exports = {
    async store(req, res) {
        const {idConta,valor} = req.body;
        const conta = await Conta.findById(idConta);
        conta.saldo -= valor;
        
        await conta.save();
        
        return res.json(conta)
    }
}