const Movimento = require('../../models/Movimento');
const Conta = require('../../models/Conta');

module.exports = {
    async index(req,res){
        const {agencia,numero} = req.params;
        const conta =  await Conta.findOne({
            $and:[
                {agencia: { $in:agencia } },
                {numero: { $in:numero } },
            ]
        });
        
        const movimentos =  await Movimento.find({
            $and:[
                {_id: { $in:conta.movimentos } },
            ]
        })
        .sort('-createdAt');

        return res.json(movimentos);
    }
}