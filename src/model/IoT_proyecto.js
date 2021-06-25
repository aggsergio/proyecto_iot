const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Valor = new Schema({
    temperatura: {type:String},
    humedad: {type:String},
    /*puesto: {type:String},*/
    fecha: {type: Date, default: Date.now}
});
module.exports = mongoose.model('IoT_proyecto', Valor);