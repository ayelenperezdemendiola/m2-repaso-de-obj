'use strict';

const adalaber1 = {
    name: 'Ana',
    age: 32,
    job: 'cocinera'
}

adalaber1.showBio = function (){
     return `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.job}.`;
}

console.log (adalaber1.showBio());

const adalaber2 = {
    name: 'Rafaela',
    age: 54,
    job: 'cantante'
}
adalaber2.showBio = function (){
    return `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.job}.`;
}

console.log (adalaber2.showBio());

// Bio de Adalabers 2
// Partiendo del objeto adalaber1 del ejercicio anterior, añade un método (una función) showBio que muestra en la consola la frase 'Mi nombre es María, tengo 34 años y soy periodista', usando el nombre, edad y estudios que están almacenados en el objeto.
// Hacemos lo mismo para adalaber2 definida en el ejercicio 1. ¿Hemos tenido que modificar mucho el método showBio? ¿Ves alguna ventaja respecto a cómo hacíamos lo mismo en el ejercicio 1?
// Nota: para que el ejercicio funcione bien debéis usar funciones normales, no arrow funtions. En siguientes sesiones veremos por qué cambia el this al usar arrow funtions.