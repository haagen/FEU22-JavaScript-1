/************************************
 * 0. Repetition
 ************************************/

/*
  while(<expression>) {
    kod;
  };

  expression = sant / falskt
*/

let listaAvBilar = [ 'Audi', 'BMW', 'Fiat', 'Volvo', 'Saab' ];
let räknare = 0; // räknare första bil -> sista bilen
let bil;
while(räknare < listaAvBilar.length){
    bil = listaAvBilar[räknare];
    räknare++;      
}
//console.log('Räknare = ' + räknare);
//console.log('Bil=' + bil);

/*
    do {

    } while(<expression>);
*/

räknare=1;
do {
    //console.log(räknare);
    räknare++;
} while(räknare <= 10);

/*

    switch (värde) {
        case <>:
            kod;
            break;
        default:
    }
*/

let produkt = 'Audi';
let pris;   // = undefined
switch(produkt) {
    case 'Audi':
        pris = 650000;
        break;
    case 'Fiat':
        pris = 190000;
        break;
    default:
        pris = 250000;
}
//console.log(produkt + ' kostade ' + pris);

/************************************
 * 0. Repetition
 ************************************/

/*

function namn(parameter1, parameter2) {
    return;
}

namn('sträng', 1);

*/

function meddela(meddelande) {
    console.log(meddelande);
    alert(meddelande);
}
/*
meddela("Hej");
meddela("Igen!");
meddela("Och igen...");
*/

function max(tal1, tal2) {
    if(tal1 > tal2) {
        return tal1;
    } else {
        return tal2;
    }
}
console.log(max(3, 4)); // Skriva 4 i console
console.log(max(4, -3));
console.log(max(5));  // undefined i console
console.log(max(1, 2, 3, 4, 5, 5, 7)); // skriva 2 i console

function max2(tal1, tal2 = 0) {
    if(tal1 > tal2) {
        return tal1;
    } else {
        return tal2;
    }
}
console.log(max2(5));  // 5 i console
console.log(max2(-1));  // 0 i console

let globaltBelopp = 10; 

function minskaBeloppMedN(belopp, n) {
    globaltBelopp = globaltBelopp - n;
    belopp = belopp - n;
    return belopp; 
}
let lokalVariabel = 20;
console.log('Mitt saldo = ' + minskaBeloppMedN(100, 50)); // 50 i konsollen
console.log('lokalVariabel = ' + minskaBeloppMedN(lokalVariabel, 50));  // -30
console.log('lokalVariabel = ' + lokalVariabel); 
console.log('globaltBelopp = ' + globaltBelopp); // ?

/************************************
 * 2. Objekt & JSON 

let object = {
    key1: value1,
    key2: value2
 };

************************************/

let användare = {
    name: "Martin Haagen",
    id: 1,
    pokemonCards: [ 1, 2, 3, 4 ]
};
console.log(användare.name);    // Skriver ut Martin Hagen
console.log(användare["name"]); // Skriver ut Martin Haagen

användare.gillarMarmelad = true;
console.log(användare);
delete användare.pokemonCards;
console.log(användare);

console.log(användare.datorModell);

let användareJSONsträng = JSON.stringify(användare);
console.log(användareJSONsträng);

let användareObjekt = JSON.parse(användareJSONsträng);
console.log(användareObjekt);