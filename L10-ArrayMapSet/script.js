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

myDogs.unshift(fido);           // Add fido to the start of the array
console.log(myDogs);
fido = myDogs.shift(fido);      // Return the first item of the array and remove it from the array
console.log(myDogs);

let myPokemons = ['Snorlax', 'Blastoise', 'Wishiwashi', 'Sylveon', 'Sylveon', 'Jolteon', 'Dragonite'];
//                    0           1           2           3           4           5           6  

const eons = myPokemons.slice(3, 6);    // Copy value from idx - to idx (but not including)
console.log(eons);
let sylveon = myPokemons.splice(4, 1);  // Remove [1] item from index [4]
console.log(sylveon);
console.log(myPokemons);
myPokemons.splice(1, 0, 'Sylveon', 'Snorlax');  // Insert ['Sylveo'] and ['Snorlax'] at index [1] - do not delete anything [0]
console.log(myPokemons);

// === dvs "0" !== 0
console.log('Sylveon 1st: ' + myPokemons.indexOf('Sylveon'));
console.log('Sylveon last: ' + myPokemons.lastIndexOf('Sylveon'));

myPokemons.sort();  // Sort the array, use "natural sorting" - e.g. alphabetical, numberic
console.log(myPokemons);
myPokemons.reverse();   // Reverse sort the order (e.g. flip it)
console.log(myPokemons);

/*

myArray.unshift('Test'); // Add "Test" on idx 0
myArray.splice(0, 0, 'Test'); // Add "Test" on idx 0
*/
// This is a support function that will create dogs for us
function createDog(name, breed, weight) {
    return {
        name: name,
        breed: breed,
        weight: weight
    };
}
// We create an array with 6 dogs to practice o
myDogs = [
    createDog('Fido', 'Border Collie', 17),
    createDog('Leon', 'Labbe', 23),
    createDog('Snudden', 'Fox Terrier', 8),
    createDog('Loppan', 'Tax', 6),
    createDog('Bubben', 'Rottweiler', 35),
    createDog('Ronja', 'Bearded Collie', 14)
];

console.log(myDogs);
myDogs.sort();  // Sort the dogs - but the function doesn't know how to sort object! How do we solve this?
console.log(myDogs);

// This function will compare two dog objects. 
// If dogA comes begore dogB it should return -1 
// If dogB comes before dogA it should return 1
// If they are the same it should return 0
function dogSortName(dogA, dogB) {
    if(dogA.name > dogB.name ) {
        return 1;
    }
    if(dogB.name > dogA.name) {
        return -1;
    }
    return 0;
}

// This function will compare two dog objects. 
// Here we use weight as the parameter for comparison. 
// We do not return 0 - the function will work any way!
function dogSortWeight(dogA, dogB) {
    if(dogA.weight > dogB.weight) {
        return 1;
    }
    return -1;
}

//console.log(dogSortName(myDogs[0], myDogs[1]));
//myDogs.sort(dogSortName);     // sort the myDogs array using the dogSortName (named) function 
//console.log(myDogs);
// myDogs.sort(dogSortWeight); // Sort the myDogs array using the dogSortWeight function
myDogs.sort(function(dogA, dogB) {  // Call with anonymous function
    return dogA.weight > dogB.weight ? -1 : 1;  // Here we use the Ternary operater to decide what to return
});
console.log(myDogs);

// Funktion that return the "breed" attribute of x
function dogBreed(x, i, ary) {  
    console.log(x);
    return x.breed;
}
let breeds = myDogs.map(dogBreed);  // Using map() with the dogBreed function to return an array with all the dog breeds
console.log(breeds);

/*
let weights = myDogs.map(function(dog) {
    return dog.weight;
});
*/

weights = myDogs.map( (dog) => { return dog.weight; } ); // Return a list of all the weight of the dogs. This is done using
                                                         // an anonymous arrow function instead of a named function. 
console.log(weights);

// This function looks at the first parameter (dog) and
// returns treu if the weight of the dog is heigher than 10.
function myDogFilterWeight(dog, index, ary) {   
    if(dog.weight > 10) {
        return true;
    }
    return false;
}

let heavyDogs = myDogs.filter(myDogFilterWeight);   // filter() is using myDogFilterWeight to find all dogs with weight > 10
console.log(heavyDogs);
let lightDogs = myDogs.filter(function(dog){        // filter() can also be called using an anonymous function (or arrow function)
    return dog.weight < 10;                         // here we return true if the weight is less than 10 otherwise false.
});
console.log(lightDogs);


/* 
 *   Map
 */

let myMap = new Map();         // Create a map
myMap.set('name', 'Martin');    // Add a key: name , value: martin
myMap.set('age', 27);           // Add a key: age, value: 12
myMap.set('dog', { name: "Boss", breed: "Border Collie", weight: 17});
console.log(myMap);
myMap.delete('age');           // Delete the key/value pair where the key is "age"
console.log(myMap);
console.log(`Martins dog is called ${myMap.get('dog').name }`);

console.log(myMap.keys());      // This will return all the keys in the Set as a "list"
console.log(myMap.values());    // This will return all the values in the Set as a "list"


/*
 * Set
 */

let mySet = new Set();      // Create a set
mySet.add(12);              // Add 12 to the set
mySet.add('name');          // Add name to the set
console.log(mySet);
console.log(mySet.size);    // Should say 2
mySet.add(12);              // This will not add 12 to the set since it is already there
console.log(mySet.size);    // Should say 2
console.log(mySet.has(12)); // This will write true - since we have 12 in the set