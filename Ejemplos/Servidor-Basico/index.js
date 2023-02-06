// Cargar la librería HTTP
const http = require('http');
const Chance = require('chance');

const chance = new Chance();

// Definir un servidor
const servidor = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-type': 'text/html'});

    response.end(`Wake up, <b>${chance.name()}</b>`); // las comillas del lado de la P son iguales a cuando se utilizan el simbolo dolar ($)
})

// Arrancamos el servidor
servidor.listen(1337, '127.0.0.1');

console.log('Servidor arrancado en http://127.0.0.1:1337');