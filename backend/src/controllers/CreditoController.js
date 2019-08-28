const Conta  = require('../models/Conta');

module.exports = { 
    async store(req, res) {
        const {id,valor} = req.body;
        const conta = await Conta.findById(id);

        conta.saldo += valor;
        
        await conta.save();

        return res.json(conta)
    }
  }