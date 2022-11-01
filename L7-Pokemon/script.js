// Pokemons - global variable - will contain a list of all 
// our pokemons. Loaded by the init() function on load. 
// [ { name: "namn", hp: 123, stage: "basic", imageUrl: "" }, { }, { }]
let pokemons;

// This function is run when the button is clicked. 
// It will
// 1. Fetch the search string from the form
// 2. Find, by calling the searchForPokemons function, all 
//    matching pokemons and store them in a list.
// 3. Render (display on the page) all the matching pokemon
//    cards.
function searchBtnClick() { // Användaren har klickat på knappen
    console.log('I searchBtnClick()');
    let search = document.getElementById('search');
    let searchStr = search.value;   // Söksträngen
    console.log(searchStr);
    let matchingPokemons = searchForPokemons(searchStr); // Search for pokemons in the global "pokemons" variable
    console.log(matchingPokemons);
    renderPokemons_1(matchingPokemons);
    //renderPokemons_2(matchingPokemons);
}

// Render function - alternative 1
// Creates a string containing HTML - one block (div)
// per found pokemon. 
function renderPokemons_1(matchedPokemons) {
    let resultTag = document.getElementById('result');
    let resultString = '';
    for (i=0;i<matchedPokemons.length;i++) {
        let pokemon = matchedPokemons[i];
        // Create a HTML-string for one card at a time
        resultString += `
        <div class="pokemonCard">
            <h3>${pokemon.name}</h3>
            <p class="attributes">hp: ${pokemon.hp} - ${pokemon.stage}</p>
            <img src="${pokemon.imageUrl}" alt="${pokemon.name}" width="175">
        </div>`;

    }
    console.log(resultString);
    resultTag.innerHTML = resultString;
}

// Render function - alternative 2
function renderPokemons_2(matchedPokemons) {
    let resultTag = document.getElementById('result');
    for (i=0;i<matchedPokemons.length;i++) {
        let pokemon = matchedPokemons[i];

        let div = document.createElement('div');
        div.className = 'pokemonCard';
        resultTag.append(div);

        let h3 = document.createElement('h3');
        h3.textContent = pokemon.name;
        div.append(h3);

    }
}

// Search through the global variable "pokemons" for
// pokemons that have a name that "match" the searchString.
// Mutliple pokemons can match and thus a list is returned.
function searchForPokemons(searchStr) {
    let result = [];
    for(let i=0; i < pokemons.length; i++) {    // Globala variablen
        let pokemon = pokemons[i];
        if(pokemon.name.includes(searchStr)) {  // sant om om searchStr finns i namnet
            result[result.length] = pokemon;
        }
    }
    return result; // matchande pokemons
}

// Imagine / simulate that we connect to a server
// and loads the pokemon database via AJAX - we
// have not yet learned AJAX that is the reason 
// we simulate it. 
function loadPokemonFromServer(){
    // Simulerar / Låtsas att vi får data via AJAX från en server
    // https://jsonformatter.curiousconcept.com/
    let response = '[{ "name": "Snorlax", "hp": 190, "imageUrl": "img/IMG_1284.jpeg", "stage": "basic" }, { "name": "Blastoise", "hp": 240, "imageUrl": "img/IMG_1285.jpeg", "stage": "stage 2" },{ "name": "Wishiwashi", "hp": 210, "imageUrl": "img/IMG_1286.jpeg", "stage": "basic" },{ "name": "Sylveon", "hp": 200, "imageUrl": "img/IMG_1287.jpeg", "stage": "stage 1" },{ "name": "Jolteon", "hp": 300, "imageUrl": "img/IMG_1288.jpeg", "stage": "vmax" },{ "name": "Dragonite", "hp": 230, "imageUrl": "img/IMG_1289.jpeg", "stage": "basic" }]';
    let pokemons = JSON.parse(response);
    console.log(pokemons);
    return pokemons;
}

// Run once when script is loaded
// used to setup and load data.
function init() {
    console.log('In init!');

    // Create click-handler
    const searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener(
        'click', 
        searchBtnClick
    );

    // Load pokemon databas
    pokemons = loadPokemonFromServer();
}


// Run the init function
// This happens when the script is loaded. 
init();
