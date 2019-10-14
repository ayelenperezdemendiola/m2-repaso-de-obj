'use strict';

const description1 = document.querySelector ('.description--adalaber1');
const description2 = document.querySelector ('.description--adalaber2');

const adalaber1 = {};
adalaber1.name = 'Susana';
adalaber1.age = 34;
adalaber1.job = 'periodista';

description1.innerHTML = `Mi nombre es ${adalaber1['name']}, tengo ${adalaber1['age']} y soy ${adalaber1['job']}.`;

const adalaber2 = {
    name: 'Rocío',
    age: 25,
    job: 'actriz'
}
description2.innerHTML = `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} y soy ${adalaber2.job}.`;

// Bio de Adalabers
// Crea un nuevo objeto en JavaScript adalaber1 que nos sirva para representar (modelar) a una Adalaber. Tenemos estos datos:
// Susana, 34 años, periodista
// Luego muestra en la web una frase como esta, accediendo a los datos del objeto:
// 'Mi nombre es Susana, tengo 34 años y soy periodista'
// Ahora hacemos lo mismo (crear el objeto adalaber2 y mostrar una frase descriptiva) con una nueva Adalaber con estos datos:
// Rocío, 25 años, actriz