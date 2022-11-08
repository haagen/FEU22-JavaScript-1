/*
 * . Repetiotion av funktioner
 */

// Namngiven funktion
function nameOnMyFunction(parameter1, parameter2) {     // The content of parameter1 is called argument1

    return; // Return a value
}

// Anonyma funktioner
/*

    function(parameter1, parameter2) {
        return;
    }

    1. Assign to a variable

    // Example: 

    let log = function(message) { 
        console.log(message); 
    };
    setTimeout(log, 1000);  // Use the log function above as an argument

    2. Used as an argument to a function 

    setTimeout(callback, timeout);

    // Exampel:
    setTimeout(function(message) { 
        console.log(message); 
    }, 1000);


    // Arrow funktion
    (parameter1, parameter2) => { }

    // Example:
    let log = (message) => {
        console.log(message);
    }



*/


let myDogs = new Array();       // Creates a new array, let myDogs = [];
myDogs.push('Pricken');         // Add Pricken to the array
myDogs.push('Fido');
console.log(myDogs);
let fido = myDogs.pop();        // Fetch last dog from array
console.log(fido);
console.log(myDogs);

myDogs.unshift(fido);
console.log(myDogs);
fido = myDogs.shift(fido);
console.log(myDogs);

let myPokemons = ['Snorlax', 'Blastoise', 'Wishiwashi', 'Sylveon', 'Sylveon', 'Jolteon', 'Dragonite'];
//                    0           1           2           3           4           5           6  

const eons = myPokemons.slice(3, 6);    // Copy value from idx - to idx (but not including)
console.log(eons);
let sylveon = myPokemons.splice(4, 1);
console.log(sylveon);
console.log(myPokemons);
myPokemons.splice(1, 0, 'Sylveon', 'Snorlax');
console.log(myPokemons);

// === dvs "0" !== 0
console.log('Sylveon 1st: ' + myPokemons.indexOf('Sylveon'));
console.log('Sylveon last: ' + myPokemons.lastIndexOf('Sylveon'));

myPokemons.sort();
console.log(myPokemons);
myPokemons.reverse();
console.log(myPokemons);

/*

myArray.unshift('Test'); // Add "Test" on idx 0
myArray.splice(0, 0, 'Test'); // Add "Test" on idx 0
*/

function createDog(name, breed, weight) {
    return {
        name: name,
        breed: breed,
        weight: weight
    };
}

myDogs = [
    createDog('Fido', 'Border Collie', 17),
    createDog('Leon', 'Labbe', 23),
    createDog('Snudden', 'Fox Terrier', 8),
    createDog('Loppan', 'Tax', 6),
    createDog('Bubben', 'Rottweiler', 35),
    createDog('Ronja', 'Bearded Collie', 14)
];

console.log(myDogs);
myDogs.sort();
console.log(myDogs);

function dogSortName(dogA, dogB) {
    if(dogA.name > dogB.name ) {
        return 1;
    }
    if(dogB.name > dogA.name) {
        return -1;
    }
    return 0;
}

function dogSortWieght(dogA, dogB) {
    if(dogA.weight > dogB.weight) {
        return 1;
    }
    return -1;
}

//console.log(dogSortName(myDogs[0], myDogs[1]));
//myDogs.sort(dogSortName);
//console.log(myDogs);
// myDogs.sort(dogSortWieght); // Call with named function
myDogs.sort(function(dogA, dogB) {  // Call with anonymous function
    return dogA.weight > dogB.weight ? -1 : 1;
});
console.log(myDogs);

function dogBreed(x, i, ary) {
    console.log(x);
    return x.breed;
}
let breeds = myDogs.map(dogBreed);
console.log(breeds);

/*
let weights = myDogs.map(function(dog) {
    return dog.weight;
});
*/

weights = myDogs.map( (dog) => { return dog.weight; } );
console.log(weights);

function myDogFilterWeight(dog, index, ary) {
    if(dog.weight > 10) {
        return true;
    }
    return false;
}

let heavyDogs = myDogs.filter(myDogFilterWeight);
console.log(heavyDogs);
let lightDogs = myDogs.filter(function(dog){
    return dog.weight < 10;
});
console.log(lightDogs);
