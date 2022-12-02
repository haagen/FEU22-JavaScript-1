
const fruits = [ 'Mango', 'Pineapple', 'Orange', 'Strawberry' ];
const it = fruits.values();

console.log(it.next()); // Mango
console.log(it.next()); // Pineapple
console.log(it.next()); // Orange
console.log(it.next()); // Strawberry
console.log(it.next()); // done: true

const it2 = fruits.values();
for (let fruit of fruits.values()) {
    console.log(fruit); // Mango -> Strawberry
}


// ------------------------------
// Repetition av Set
// ------------------------------

// Vad är en array (Klass)
// lista, ordnad, vädena är inte unika, olika typer, indexerad 
// [ ][ ][ ][ ] ...
//  0  1  2  3  ...
// många olika funktion: sort, reverse, map och filter

// Vad är ett set? (Klass)
// lista, ordnad (instoppade i den), unika väden, olika typer
// [ ][ ][ ]
// Set kontrollerar att det inte finns några dubletter 

let mySet = new Set();
mySet.add(42);
mySet.add('Liftarens guide till galaxen');
mySet.add([1, 2, 3, 4]);
mySet.add({ status: "ok" });
console.log(mySet);
console.log(`Vi har ${mySet.size} saker i vårt sett`);
console.log(`Har vi nummer 42 i vårt set? ${ mySet.has(42) }`);     // has checks if the value exists in the set 

for(let item of mySet.values()) {
    console.log(item);
}

console.log(mySet[1]); // ?

let myArrayFromASet = Array.from(mySet);  // Överkurs: Skapa en array från ett set
console.log(myArrayFromASet);

// ------------------------------
// Repetition av Map
// ------------------------------

// Vad är en Map? (Klass)
// nyckel-värde par samling 
// [ nyckel ] [ nyckel ] [ nyckel ] 
//      |         |         |
//    värde      värde     värde
//
// Koppla ihop olika typer av data. Uppslag. Konvertera saker. Osv

// { name: 'Fido', breed: 'Bastard', weight: 23 }
// namn -> hund
// nyckel : värde

let myMap = new Map();
myMap.set('Jon Snow', { name: 'Jon Snow', breed: 'Bastard', weight: 23 });
myMap.set('TK', { name: 'TK', breed: 'Tax', weight: 4 });
myMap.set('Boss', { name: 'Boss', beed: 'Border Collie', weight: 17 });
console.log(`Hur många hundar har vi i vår databas: ${myMap.size} `);

myMap.delete('TK');
console.log(`Hur många hundar har vi i vår databas: ${myMap.size} `);

const userProvidesDogName = 'Boss';
const boss = myMap.get(userProvidesDogName); // The "boss" object should be returned
console.log(boss);

for (let key of myMap.keys()) { // Loop over all of the keys in the map
    console.log(key);
}

for (let value of myMap.values()) { // Loop over all of the values in the map
    console.log(value);
}

for (let keyValue of myMap.entries()) { // Loop over all the pairs
    console.log(keyValue);
}


// -------------------------------------
// Repetition av Funktioner och Return
// -------------------------------------


const inputFromTheUser = 34;

function max(värde1, värde2) {   // paramaters (innehåller argumentet)
    // värde1 = 5, värde2 = 34
  
    if (värde1 > värde2) {  // om värde1 (5) > värde2 (34)
        return värde1;      // returnera värde 1 (5)
    }
    return värde2;          // returnera värde 2 (34)

    //return (värde1 > värde2) ? värde1 : värde2;
}

let maximum = max(5, inputFromTheUser);  // argument -> parametrarna
console.log(maximum);

// function should return true if user input is okay
// if not okay - return an Error
function validateUserInput(objUserInput) {

    if(objUserInput.name.length == 0) { // Check the length of the name input
        return new Error('Name is mandatory');
    }

    if(objUserInput.name.length > 35) {
        return new Error('Name is too long (max 35)');
    }

    // massor valideringar

    return true;
}