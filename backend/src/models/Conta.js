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
},{
    timestamps:true   
});

module.exports = model('Conta', ContaSchema);