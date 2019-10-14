'use strict';

const button = document.querySelector ('.button');

function investigation (event){
    return console.log (event.currentTarget);
}

button.addEventListener ('click', investigation);

//The type property sets or returns the type of a button.
