
let minBok = [ 'Sida 1', 'Sida 2', 'Sida 3' ];  // Ny array av sträng
let bokmärke = minBok.values();                 // Get's an iterator for the collection
console.log(bokmärke.next());                   // Prints the first value
console.log(bokmärke.next());                   // Prints the second value
console.log(bokmärke.next());
console.log(bokmärke.next());
console.log(bokmärke.next());

bokmärke = minBok.values();                     // Get a new iterator (overwrites the old)
for (let sida of bokmärke) {                    // Loop over the iterator
    console.log(sida);
}

let minaHundar = [ 'Plutten', 'Fido', 'Boss', 'Stina-Lisa', 'TK' ];
for (let hund of minaHundar.values()) {
    console.log(hund);
}

// Iterator on Set
let mySet = new Set();                          // Creates a new array
mySet.add('ett');
mySet.add('två');
mySet.add('tre');
for (let s of mySet.values()) {                 // Loops through the array
    console.log(s);
}


// Iterator on Map
let myMap = new Map();                          // Create a Map for Country to Currency mapping
myMap.set('Sverige', 'SEK');                    // Key: Sverige, Value: SEK
myMap.set('Danmark', 'DKK');
myMap.set('USA', 'USD');
myMap.set('Vietnam', 'DONG');

for (let currency of myMap.values()) {          // Loop over the values
    console.log(currency);
}
for (let country of myMap.keys()) {
    console.log(country);
}
for (let entry of myMap.entries()) {
    console.log(entry);
    //if (entry[0] == 'Sverige') {
    //    console.log(entry);
    //}
    //console.log(`<tr><td>${entry[0]}</td><td>${entry[1]}</td></tr>`);
}