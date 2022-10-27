/*
*  0. Repetition
*/

// funktioner
// objekt

function max(tal1, tal2) {  // tal1 och tal2 är parametrar (värdena i parametrarna kallas för argument)
    if(tal1>tal2) {
        return tal1;
    } 
    return tal2;
}
console.log(max(4, 2)); // 4

const produktPris1 = 25.34; // 
const produktPris2 = 36.12;

console.log(`Den dyraste produkten kostar ${max(produktPris1, produktPris2)} kronor`);

/*

function loop(min, max) {
    for(let i=min; i < max; i++) {

    }
}

loop(0, 10);
loop(0, 5);

*/

let objekt = {
    //nyckel: värde
    nyckel: 5
};
console.log(objekt.nyckel); // 5

let bil = {
    make: 'Tesla',
    model: 'S',
    milage: 10000
};

/*
*  1. Mer om funktioner
*/

function log(meddelande) {
    console.log(meddelande);
}
console.log('Sträng från console.log()');
log('Sträng från log()');

let log2 = function(meddelande) {
    console.log(meddelande);
}
log2('Sträng från log2()');
let log3 = log; 
log3('Sträng från log3()');

let log4 = (meddelande) => {
    console.log(meddelande);
}
log4('Sträng från log4()');

let add = (tal1, tal2) => {
    return tal1 + tal2;
}
log4('add(1, 5) = ' + add(1, 5)); 


function variabelLogger(meddelande, logger) {
    logger(meddelande);
}

variabelLogger("Sträng från variabelLogger()", log4);
variabelLogger("Sträng från en anonymfunktion", (meddelande) => {
    console.log(meddelande);
});

// Ett annat exempel - vi gör oss fina! 
let dush = function(namn) {  // samma som "function dush(namn)"
    console.log(`${namn} dushar`);
}
console.log(dush('Simon'));

let tandborstning = (namn) => { // samma som "function tandborstning(namn)"
    console.log(`${namn} borstar tänderna`);
}
console.log(tandborstning('Viktor'));

function nagelKlipp(namn) {
    console.log(`${namn} klipper naglarna`);
}
console.log(nagelKlipp('Isac'));

let görHygien = function(vem, vad) {        // vad skall vara en funktion, vem skall vara namn (sträng)
    vad(vem);
    //vad('Kalle');
}

görHygien('Sanna', tandborstning);
görHygien('Sanna', nagelKlipp);
görHygien('Jenny', (namn) => {
    console.log(`${namn} klipper sig`);
});


/*
*  2. Funktioner och objekt
*/

let bike = {
    make: 'Trek',
    isElectric: false,
    size: 0, // size in inches
    setSize: function(newSize) {
        this.size = newSize;   // använd this för att referera till detta objektet 
                               // använd ej "bike" här eftersom du då inte kan vara 
                               // säker på att det är detta objektet du uppdaterar. 
    }
};

log(bike);
bike.setSize(28);
log(bike);


/*
*  3. Klasser och objekt
*/

/*
class Hund {
    constructor() {
        log('I constructor()');
    }
}

const fido = new Hund();
const pluto = new Hund();

log(`fido instanceof Hund: ${ fido instanceof Hund }`);
log(`fido instanceof Array: ${ fido instanceof Array }`);
*/


class Pet {
    constructor() {
        log('Constructor Pet');
    }

    setOwner(ownerName) {
        this.owner = ownerName;
    }

    setCountry(country) {
        this.country = country;
    }
}

class Hund extends Pet { // 

    constructor(name, breed) {
        log('Constructor Hund')
        super();        // Kör constructorn i Pet
        this.name = name;
        this.breed = breed;
        this.age = 0;
    }

    increaseAge(years) {
        this.age += years;  // this.age = this.age + years;
        log('Increases the age of ' + this.name + ' to ' + this.age);
    }
}

const fido = new Hund('Boss', 'Border Collie');
log(fido);
fido.age 
fido.increaseAge(2);
log(fido);
fido.setOwner('Martin');
fido.setCountry('Sweden');


/*
*  4. Document Object Model - DOM
*/

const para1 = document.getElementsByTagName('p');
for(let i=0;i<para1.length;i++){
    let myP = para1[i];
    log('getElementsByTagName node contents: ' + myP.textContent );  // myP.innerHTML (skrive ut HTML)
}

const para2 = document.getElementsByClassName('viktigt');
log(para2);

const para3 = document.getElementById("status");
log(para3);

// tag
// .class
// #id
let para4 = document.querySelectorAll("p.viktigt");  
log(para4);
para4 = document.querySelectorAll('.viktigt');
log(para4);