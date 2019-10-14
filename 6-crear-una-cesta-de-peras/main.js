'use strict';

//Y varios métodos que hagan:
//  Añadir al cesto una pera
//    Sacar del cesto una pera
//    Restablecer el número de peras al valor inicial.
const noMorePears = 'No se pueden agregar más peras';
const noRestPears = 'No se pueden restar más peras';

const basquet = {
    maxPears: 40,
    minPears: 1,
    actualPears: 4,
    initialPears: 0,
    add: function(number){
        if (this.actualPears < this.maxPears){
            const resultAdd = this.actualPears + number;
            this.actualPears = resultAdd;
            return this.actualPears;
        } else if (this.actualPears >= this.maxPears){
            return noMorePears;
        }
    },
    rest: function (number){
        if (this.actualPears > this.minPears){
            const resultRest = this.actualPears - number;
            this.actualPears = resultRest;
            console.log(resultRest)
            return resultRest;
        } else if (this.actualPears < this.minPears){
            console.log (noRestPears);
            return noRestPears;
        }
    },
    reset: function (){
        return this.actualPears = this.initialPears;
    }
}



console.log(`El número de peras añadido es: ${basquet.add(1)}`);
console.log(`El número de peras restadas es: ${basquet.rest(0)}`);
console.log(`El número de peras reseteado es: ${basquet.reset(0)}`);

console.log (basquet);