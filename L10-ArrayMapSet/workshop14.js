// Uppgift 1
function createPokemon(name, hp, stage) {
    return {
        name: name,
        hp: hp,
        stage: stage
    };
}

let myPokemons = [
    createPokemon('Pokemon 1', 10, 'stage 1'),
    createPokemon('Pokemon 2', 50, 'stage 2'),
    createPokemon('Pokemon 3', 99, 'stage 3'),
    createPokemon('Pokemon 4', 101, 'stage 1'),
    createPokemon('Pokemon 5', 150, 'stage 2'),
    createPokemon('Pokemon 6', 220, 'stage 3')
];
console.log(myPokemons);


// Uppgift 2
function newFunction() {
    let mySet = new Set();
    for(let i=0;i<myPokemons.length;i++) {
        mySet.add(myPokemons[i].stage);
    }
    console.log(mySet);
}
newFunction();

// Uppgift 3
let priceList = new Map();
priceList.set('Pokemon 1', 100);
priceList.set('Pokemon 2', 80);
priceList.set('Pokemon 3', 120);
priceList.set('Pokemon 4', 60);
priceList.set('Pokemon 5', 140);
priceList.set('Pokemon 6', 200);
console.log(priceList);

let pokemonPrice = priceList.get(myPokemons[2].name);
console.log(pokemonPrice);

let sumOfAll = 0;
// eHandel
function init() {
    fillPokemon();
    let buyBtn = document.getElementById('buy');
    buyBtn.addEventListener('click', buyBtnClick);
}

function buyBtnClick(){
    console.log('In buyBtnClick');
    let mySelect = document.getElementById('myPokemons');
    let selectedPokemon = mySelect.value;
    let pokePrice = priceList.get(selectedPokemon);
    let meddelande = `${selectedPokemon} kostade ${pokePrice}, tack för ditt köp`;
    sumOfAll += pokePrice;
    let span = document.getElementById('message');
    span.textContent = meddelande;
    let total = document.getElementById('total');
    total.textContent = sumOfAll;
    /*
    // Alt 1 - Med loop
    let index = -1;
    for(let i=0;i<myPokemons.length;i++) {
        if(myPokemons[i].name == selectedPokemon) {
            index = i;
        }
    }
    */
    // Alt 2 - Utan loop
    let index = myPokemons.map(x => x.name).indexOf(selectedPokemon);
    myPokemons.splice(index, 1);
    fillPokemon();
}

function fillPokemon(){
    let mySelect = document.getElementById('myPokemons');
    let options;
    for(let i=0;i<myPokemons.length;i++) {
        options += `<option value="${myPokemons[i].name}">${myPokemons[i].name}</option>`;
    }
    mySelect.innerHTML = options;
}


init();