const mongoose = require('mongoose');

// Definir el esquema de los agentes
const agenteSchema = mongoose.Schema({
    name: String,
    age: {type: Number, min: 18, max: 90}
}, {
    // collection: 'agentes'
})

// Crear el modelo de Agente
const Agente = mongoose.model('Agente', agenteSchema);

// Exportar el modelo
module.exports = Agente;