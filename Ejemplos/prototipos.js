'use strict';

function Persona(nombre) {
    this.nombre = nombre;
}

const pepe = new Persona('Pepe');
const luis = new Persona('Luis');

// Añadir propiedades al prototipo de las personas
Persona.prototype.saluda = function() {console.log('Hola soy', this.nombre)}

pepe.saluda();
luis.saluda();

// Herencia Simple --------------------------------------------------
function Agente(nombre) {
    // Heredar el constructor de las personas
    // Llamar al constructor de las personas con mi "this"
    Persona.call(this, nombre);
}

// Heredar propiedades de las personas
Agente.prototype = Object.create(Persona.prototype);
Agente.prototype.constructor = Agente;

const smith = new Agente('Smith');

smith.saluda();

// Herencia Múltiple -------------------------------------------------
// (Mixin)
function Superheroe() {
    this.vuela = function() {console.log(this.nombre, 'vuela')};
}

// Copiar todas las propiedades de los Superheroes al prototipo del "Agente"
const superheroe = new Superheroe();
console.log(superheroe);
Object.assign(Agente.prototype, superheroe);

smith.vuela();

// (Para comprobar las propiedades que tienen más claramente, solo para informacion del curso)
console.log(Agente.prototype);
console.log(Persona.prototype);