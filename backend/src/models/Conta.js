const { Schema , model } = require('mongoose');

const ContaSchema = new Schema({
    agencia:{
        type:Number,
        required:true
    },
    numero:{
        type:String,
        required:true
    },
    saldo:{
        type:Number,
        required:false
    },
    movimentos:[{
        type:Schema.Types.ObjectId,
        ref:'Movimento'
    }]
},{
    timestamps:true   
});

module.exports = model('Conta', ContaSchema);