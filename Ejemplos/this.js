'use strict'

// Crear una función para usarla como constructor de objetos
function Fruta(nombre) {
    this.nombre = nombre;

    this.saluda = function() {
        console.log('Hola soy', this.nombre);
    }
}

const limon = new Fruta('limon');

// Donde están los paréntesis de ejecución
// Mira lo anterior al punto de la izquierda
// Y lo usa como 'this' para el método saluda{}
//limon.saluda();

//setTimeout(limon.saluda.bind(limon), 2000)

const unaFuncion = limon.saluda;
//unaFuncion();
unaFuncion.call(limon);