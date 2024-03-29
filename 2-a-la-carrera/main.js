'user strict';

const adalaber1 = {
    name: 'Rocío',
    age: 31,
    job: 'actríz',
    run: phrase => console.log(phrase),
    runAMarathon: distance => console.log (`Estoy corriendo una maratón de ${distance} kilómetros`)
}

adalaber1.run('Estoy corriendo');
adalaber1.runAMarathon(50);

// EJERCICIO 2
// A la carrera
// Partiendo del objeto adalaber1 del ejercicio anterior, añade un método (una función) run que muestre en la consola (lo llamamos loguear) la frase 'Estoy corriendo'.
// Ahora, vamos a añadir un nuevo método runAMarathon que toma un parámetro distance que es un número. Al ejecutarlo, debe mostrarse en la consola el texto 'Estoy corriendo un maratón de 50 kilómetros' siendo 50 el valor del argumento distance que le hemos pasado.