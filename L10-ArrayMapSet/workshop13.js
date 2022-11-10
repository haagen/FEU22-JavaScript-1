
let fruits = ['Banan', 'Apelsin', 'Morot', 'Äpple', 'Melon'];
//               0          1       2         3         4
let appleIdx = fruits.indexOf('Äpple'); // #2
console.log(appleIdx);  

let subArray = fruits.slice(1, 4);  // #3
console.log(subArray);


// Uppgift 4
function newFunction(ary, search) {
    let idx = ary.indexOf(search); 

    if(idx >= 0) {   // == We found a match
        ary.splice(idx, 1);
    } 
}
newFunction(fruits, 'Morot');
console.log(fruits);


// Uppgift 5
fruits.reverse(); 
console.log(fruits);

// Uppgift 6
function createPokemon(name, hp, stage) {
    return {
        name: name,
        hp: hp,
        stage: stage
    };
}

// Uppgift 7
let myPokemons = [
    createPokemon('Pokemon 1', 10, 'stage 1'),
    createPokemon('Pokemon 2', 50, 'stage 2'),
    createPokemon('Pokemon 3', 99, 'stage 3'),
    createPokemon('Pokemon 4', 101, 'stage 1'),
    createPokemon('Pokemon 5', 150, 'stage 2'),
    createPokemon('Pokemon 6', 220, 'stage 3')
];
console.log(myPokemons);

// Uppgift 8
function sortPokemonAlpha(a, b) {
    if(a.name > b.name) {
        return 1;
    }
    if(a.name < b.name) {
        return -1;
    }
    return 0;
}

// Uppgift 9
myPokemons.sort(sortPokemonAlpha);
console.log(myPokemons);

// Uppgift 10
function getPokemonName(pokemon) {
    return pokemon.name;
}

// Uppgift 11
function getPokemonHP(pokemon) {
    return pokemon.hp;
}

// Uppgift 12
function isStrongerThan100(pokemon) {
    return (pokemon.hp > 100); // return pokemon.hp > 100 ? true : false;
    //       == true / false 
}

// Uppgift 13
let newArrayWithStrongPokemons = myPokemons.filter(isStrongerThan100);  // named function
//let newArrayWithStrongPokemons = myPokemons.filter((pokemon) => {       // anonymous function
//    return (pokemon.hp > 100); 
//});
//let newArrayWithStrongPokemons = myPokemons.filter(function(pokemon) {    // anonymous function
//    return (pokemon.hp > 100); 
//});
console.log(newArrayWithStrongPokemons);

// Uppgift 14
let pokemonNames = newArrayWithStrongPokemons.map(getPokemonName);
console.log(pokemonNames);

/*
let pokemonNamesAlt = myPokemons
                            .filter(x => x.hp > 100)
                            .map(x => x.name);
console.log(pokemonNamesAlt);
*/