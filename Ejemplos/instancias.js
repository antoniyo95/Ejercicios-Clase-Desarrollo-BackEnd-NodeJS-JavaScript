'use strict';

// Crear una función para usarla como constructor de objetos
function Fruta(nombre) {
    // this = {}
    this.nombre = nombre;
    // this = {}
    this.saluda = function() {
        console.log('Hola soy', this.nombre);
    }
}

const limon = new Fruta('limon');

console.log(limon);

limon.saluda();