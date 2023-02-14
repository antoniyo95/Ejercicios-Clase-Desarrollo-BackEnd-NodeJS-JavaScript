const express = require('express');
const router = express.Router();
const Agente = require('../../models/Agente');

// GET /api/agentes
router.get('/', async (req, res, next) => {
    try {

        const agentes = await Agente.find();

        throw new Error('Se ha roto');

        res.json({results: agentes});

    } catch (error) {
        next (error);
    }
});

module.exports = router;