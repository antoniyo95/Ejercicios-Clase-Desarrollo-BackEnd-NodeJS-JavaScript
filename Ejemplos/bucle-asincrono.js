'use strict';

function escribeTras2Segundos(texto, callback) {
    setTimeout(() => {
        console.log(texto);
        callback();
    }, 2000);
}

function serie(n, fn, callback) {
    if (n == 0) {
        // Termino el bucle
        callback();
        return
    }
    n = n -1;
    fn('texto' + n, () => {
        serie(n, fn, callback)
    })
}
console.log('Inicio');

serie(5, escribeTras2Segundos, () => {
    console.log('Fin')
})