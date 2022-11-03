/****************************************
 *  0. Repetition
/****************************************/

// Kontrollflöden - loop, if
// Arrayer
// Funktioner
// Objekt - Attribut/Egenskaper

let dogBreed = 'Tax';
let expression = dogBreed == 'Tax';
expression = allwaysTrue();

if(expression){       // expression - gives true/false 
    // if expression was true we will do this
    console.log('Tax is a nice dog!')
} else {
    // if expressin was false we will do this instead 
}

function allwaysTrue() {
    return true;
}

// for(init ; expression ; finally) 
for (                   // for (let counter=0; counter < 5; counter++) {}
    let counter = 0;    // Init the counter to 0 - this counter is only available inside the loop
    counter < 5;        // As long as this is true when the loop starts - next itteration will begin
    counter++           // After the loop has executed 
) {
    console.log(`counter = ${counter}`);
}

function randomNumber() {
    return Math.floor(Math.random() * 6); // Slumpat tal 0 - 5
}


while(randomNumber() != 2) { // run randomNumber() and compare to 2 - not equal to
    console.log(`Talet blev inte 2`);
}

let antalVarv = 0; // Create variable
do {
 antalVarv++; // count up by 1
} while(randomNumber() != 2);   // Evaluate - should the loop start over?
console.log(`Antal varv = ${antalVarv}`);

// Arrays (Listor)

let myArray = [];   // Creates an empty array   
myArray = [0, 'Tax', true, { temperature: 12 }]; // Create an array with different values in it. { temperatuer: 12 } is an object
console.log(myArray[1]); // Array index starts on 0 -> gives us 'Tax' in the console. 
myArray[1] = 'Border Collie'; // Updates the array
console.log(myArray);

for(let i=0; i<myArray.length; i++) { // loops from 0 as long as i is less than the number of items in the array
    console.log(`i=${i} myArray[${i}]=${myArray[i]}`);  // Print the content example: "i=2 myArray[2]=true"

    let objekt = myArray[i];   // Assign the value of index i to the objekt variable
    console.log(objekt.temperature); // alt. console.log(myArray[i].temperature)
}

function namn(parameter1, parameter2) {

    return;
}

namn(); // no parameters: parameter1 = undefined, parameter2 = undefined
namn('Kalle'); // parameter1 = "Kalle", parameter2 = undefined
namn('Kalle', 'Anka', 'Ankeborg'); // parameter3 will not be usable in the function

function namn2(parameter1 = "Kalle") {
    return;
}

namn2(); // parameter1 == "Kalle"

// What can a parameter be? 
// Everything we can put into a variable can be passed as a parameter
// 1, "sträng", true, null, undefined, [ ], { }
/*
{
    attribut: value,
    method: function() { return; }
}

{
    name: "",
    breed: "",
    color: ""
}
*/
function createDog(nameX, breedX, colorX) {
    return {
        name: nameX,  // name - attribute, nameX contains the value that the attribute will get assigned
        breed: breedX,
        color: colorX
    } // returns a new object
}
let myDogs = [
    createDog("Plutten", "Pudel", "Black"),     // idx = 0
    createDog("Bengan", "Border Collie", "Black and White"), // idx = 1
    createDog("Ture", "Tax", "Brown") // idx = 2
]; // Create one array with three dog objects
console.log(myDogs);

function getDogBreeds(allTheDogs) {  // allTheDogs should be an array with dog objects
    let dogBreeds = []; // This will conain all the breeds - currently empty
    for(let idx = 0; idx < allTheDogs.length; idx++) {
        let dog = allTheDogs[idx];  // Bring out the dog
        console.log(`dogBreeds[${dogBreeds.length}]`);
        dogBreeds[dogBreeds.length] =  dog.breed; // Put the dog.breed on the next place in the dogBreeds array
    }
    return dogBreeds;
}   // we should return a new array conaining all the breeds

let breeds = getDogBreeds(myDogs); // Use the myDogs array as a parameter, get a new array as result 
//let breeds = getDogBreeds([{ name: "Sven", breed: "Labrador", color: "Red" }]);
//let breeds = getDogBreeds([]);
console.log(breeds);

// funktioner i en variabel 
// arrow funktion 
// array som en parameter

let log = function(mess1, mess2) { console.log(mess1, mess2); }; // log = console.log()

log('AND','');
log('1: ', true && true);
log('2: ', true && false);
log('3: ', false && true);
log('4: ', false && false);

log('OR', '');
log('5: ', true || true);
log('6: ', true || false);
log('7: ', false || true);
log('8: ', false || false);

log('!', '');
log('9: ', !true);
log('10:', !false);

log('!10', !10);
if(10) log('if(10)', true);
log('!""', !"");    // empty string - evaluates to false - !false = true
log('!"s"', !"s"); // non empty string - evaluates to true - !true = false

/*
if(expression)
while(expression)
do {} while(expression)
for(i=0;expression;)
*/

log('Sammansatta uttryck', '');
log('1: ', true && true || false); // sant, (i<10 && timer>4 || status == "Ok")
log('2: ', false || true && true); // sant
log('3: ', false || !true || true); // sant 
log('4: ', true && true || true && false); // true || false = true
log('5: ', (true && true) || (true && false));

// The order is important
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
