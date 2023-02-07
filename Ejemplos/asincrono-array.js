'use strict';

function escribeTras2Segundos(texto, callback) {
    setTimeout(() => {
        console.log(texto);
        callback();
    }, 2000);
}

function serie(array, fn, callback) {
    if (array.length === 0) {
        // Termino el bucle
        callback();
        return
    }
    fn('texto' + array.shift(), () => {
        serie(array, fn, callback)
    })
}
console.log('Inicio');

serie(['uno', 'dos', 'tres', 'cuatro', 'cinco'], escribeTras2Segundos, () => {
    console.log('Fin')
})