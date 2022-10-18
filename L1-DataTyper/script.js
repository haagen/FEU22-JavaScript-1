
/*
    Datatyper - kommentarer
*/
console.log('Första lektionen!'); 
console.log('Rad 2'); 

// Detta är en enrads kommentar
/*
    Detta är en kommentar för flera rader
*/

let number = 5;
number = number + 1;

const constant = 10;
//constant = constant + 5;  - detta går inte, konstanter får inte ändras
console.log(constant);

// Okey att anvånda bokstav, siffra, _ och $ i variabelnamn - men börja inte med siffra

let lite3 = 3;
//let 3lite = 3;
let _notSoCool = 'Coolio';
console.log(_notSoCool)
let $coolVar = _notSoCool;
console.log($coolVar);

let camelCase = '';
let snake_case = '';

// Litterärer 
// const, variabel, "" 

/*
    Datatyper

    Primära datatyper
    - Number
    - Strängar
    - Boolean 
    - null 
    - undefined
    - symbol
*/

let tal=1;
let sträng='En sträng';
let boolean=true; // =false;
let nullType=null; 
let undefinedType=undefined;

let objectDual = {
    x: 1.5, 
    y: 3.2
};
console.log(objectDual.x);

let objectKod = {
    log : function() {
        console.log('Jag är en funktion!');
    }
};
objectKod.log();


