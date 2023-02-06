'use strict';

function escribeTras2Segundos(texto, callback) {
    setTimeout(() => {
        console.log(texto);
        callback();
    }, 2000);
}

console.log('Inicio');

escribeTras2Segundos('Texto1', () => {
    escribeTras2Segundos('Texto2', () => {
        console.log('Fin');
    });
});