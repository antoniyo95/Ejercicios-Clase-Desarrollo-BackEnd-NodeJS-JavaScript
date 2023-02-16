const express = require('express');
const router = express.Router();
const Agente = require('../../models/Agente');

// CRUD: Creat, read, update, delete

// GET /api/agentes
// Devuelve una lista de agentes
router.get('/', async (req, res, next) => {
  try {

    // Filtros
    const filterByName = req.query.name;
    const filterByAge = req.query.age;
    // Paginación
    const skip = req.query.skip;
    const limit = req.query.limit;
    // Ordenar
    const sort = req.query.sort;
    // Selección de campos
    const fields = req.query.fields;

    // Ejemplos:
    // http://localhost:3000/api/agentes?sort=-age name&fields=age -_id
    // http://localhost:3000/api/agentes?name=Smith
    // http://localhost:3000/api/agentes?skip=2&limit=2


    const filtro = {};

    if (filterByName) {
        filtro.name = filterByName;
    }

    if (filterByAge) {
        filtro.age = filterByAge;
    }

    const agentes = await Agente.lista(filtro, skip, limit, sort, fields);

    res.json({ results: agentes });

  } catch (error) {
    next(error);
  }
});

// GET /api/agentes/(_id)
// Devuelve un agente buscando por _id
router.get('/:id', async (req, res, next) => {
  try {

    const id = req.params.id;

    const agente = await Agente.findById(id);

    if(agente) {
        agente.saluda();
    }

    res.json({ result: agente });

  } catch (error) {
    next(error);
  }

});

// PUT /api/agentes/:(id)   (body)
// Sirve para actualizar un agente
router.put('/:id', async (req, res, next) => {
    try {
        
        const id = req.params.id;
        const data = req.body;

        const agenteActualizado = await Agente.findByIdAndUpdate(id, data, {
            new: true // Esto hace que nos devuelva el documento actualizado
        });

        res.json({result: agenteActualizado});

    } catch (error) {
        next(error);
    }
})

// POST /api/agentes    (body)
// Crea un agente
router.post('/', async (req, res, next) => {
    try {

        const agenteData = req.body;

        // Creamos una instancia de Agente
        const agente = new Agente(agenteData);

        // La persistimos (Guardarlo) en la Base de Datos
        const agenteGuardado = await agente.save();

        res.json({result: agenteGuardado});

    } catch (error) {
        next(error);
    }
})

// DELETE /api/agentes/:(id)
// Elimina un agente
router.delete('/:id', async (req, res, next) => {
    try {

        const id = req.params.id;

        await Agente.deleteOne({_id: id});

        res.json();
        
    } catch (error) {
        next(error);
    }
})

module.exports = router;