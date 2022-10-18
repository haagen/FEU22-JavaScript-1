
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

/*
    Strängar
*/

let s1='apostrof';
let s2="citattecken";
let s3=`back-tick`;

let s4="Let's do that!";
s4="Rad ett \
rad två";
s4='Let\'s do that';
s4="Let's do \"that\"";
console.log(s4);
s4="Rad ett\nRad två";      // \n = ny rad, \t = tab
console.log(s4);
s4 = "Frukter: \n\
 - banan\n\
  - apelsin";
console.log(s4);
s4 = "Frukter: \n"
    + "- banan\n"
    + "- apelsin";

s4 = "33";
console.log(s4);
s4 = 3 + s4;    // 3 konverteras till en sträng -> 333
console.log(s4);
s4 = 3 * "33";  // 33 konverteras till ett nummer -> 99
console.log(s4);

let s='Grattis Tisdag!';
console.log(s.length);  // Stägens längd
let startPos=8;
let endPos=14;
console.log(s.slice(startPos, endPos)); // Ursnitt - ta en sträng mellan start och slut
console.log(s.replace('Tisdag', 'Onsdag')); // Ersätt
let nySträng = s.replace('Tisdag', 'Onsdag');
console.log(nySträng);

console.log(s.toUpperCase());
console.log(s.toLowerCase());
s = "Hello";
console.log(s.concat("World"));
console.log("Hello".concat("World"));   // Slå ihop Hello och World till "HellWorld"

let firstName="Martin ".trim(); // Tabort whitespace i början och i slutet av strängen
let lastName="Haagen".trim();
console.log(firstName+" "+lastName);
s="    Kalle på Spången !     ";

console.log(s.trimStart()); // Tabort whitespaces i början
console.log(s.trimEnd()); // Tabort whitespaces i slutet

console.log(s.length);
console.log(s.padEnd(30, "!"));

s="1234!Martin!12";
console.log(s.indexOf("!"));
console.log(s.lastIndexOf("!"));

startPos=s.indexOf("!")+1;
endPos=s.lastIndexOf("!");
console.log(s.slice(startPos, endPos));

console.log(s.includes("!"));