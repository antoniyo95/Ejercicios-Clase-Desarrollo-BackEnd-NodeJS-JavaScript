'use strict';

// Cargar la librería de Express
const express = require('express');

// Crear la aplicación
const app = express()

// Añadimos una ruta
app.get('/', (request, response, next) => {
    response.send('Hola');
});

// Arrancar el servidor
app.listen(8080, () => {
    console.log('Servidor HTTP arrancado en http://127.0.0.1:8080');
});