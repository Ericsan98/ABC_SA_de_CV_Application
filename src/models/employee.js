const mongoose = require('mongoose');
const {Schema} = mongoose;

const EmployeeSchema = new Schema({
    Nombre: {type: String, required: true},
    Apellido_Paterno: {type: String, required: true},
    Apellido_Materno: {type: String, required: true},
    Puesto: {type: String, required: true},
    Area: {type: String, required: true},
    Jefe_Inmediato: {type: String, required: true},
    Hora_Entrada: {type: String, required: true},
    Hora_Comida: {type: String, required: true},
    Hora_Salida: {type: String, required: true},
});

module.exports = mongoose.model('Employee', EmployeeSchema);