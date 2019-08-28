const { Schema , model } = require('mongoose');

const MovimentoSchema = new Schema({
    identificador:{
        type:String,
        required:true
    },
    valor:{
        type:Number,
        required:true
    },
},{
    timestamps:true   
});

module.exports = model('Movimento', MovimentoSchema);