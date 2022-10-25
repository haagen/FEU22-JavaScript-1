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
console.log('Räknare = ' + räknare);
console.log('Bil=' + bil);

/*
    do {

    } while(<expression>);
*/

räknare=1;
do {
    console.log(räknare);
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
console.log(produkt + ' kostade ' + pris);