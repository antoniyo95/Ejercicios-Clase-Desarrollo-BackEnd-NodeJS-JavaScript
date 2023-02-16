const mongoose = require('mongoose');

// Definir el esquema de los agentes
const agenteSchema = mongoose.Schema({
    name: String,
    age: {type: Number, min: 18, max: 90}
}, {
    // collection: 'agentes'
});

// Tipos de métodos:
// -- Agente.createWithColor('red') -- > Metodo estatico
// -- agente.sendEmail({ subject: 'asdas'}) --> Método de instancia (No usar arrow functions aqui)

agenteSchema.statics.lista = function(filtro, skip, limit, sort, fields) {
    const query = Agente.find(filtro); // Método thenable
    query.skip(skip);
    query.limit(limit);
    query.sort(sort);
    query.select(fields);

    return query.exec();
}

agenteSchema.methods.saluda = function() {
    console.log('Hola, soy el agente', this.name)
}

// Crear el modelo de Agente
const Agente = mongoose.model('Agente', agenteSchema);

// Exportar el modelo
module.exports = Agente;