# Workshop 7

Mer funktioner, JSON och Objekt.

1. Skapa ett objekt som beskriver en hund
   - Skall ha ett namn (Fido)
   - Skall ha en ras (Border Collie)
   - Skall ha en vikt (17)
2. Skapa en funktion med tre parametrar (namn, ras, vikt) som returnerar ett nytt hund objekt.
3. Skapa en lista (array) som innehåller 6 hundar (objekt). Du får själv välja namn, ras och vikt. 
4. Skapa en **funktion** som tar en *lista av hundar* som **parameter** och **returnerar** medelvikten på hundarna.
    - Skapa en ny funktion med en parameter
    - Skapa en variabel som innehåller *summan* av hundarnas vikt
    - Skapa en loop som går igenom listan av hundar (parametern till funktionen)
        - Ta hundens vikt och lägg till *summan* av hundarnas vikter
    - Medelvikten beräknas genom att dela *summan* av hundarnas vikter med antalet hundar (summa / antal).
5. Skapa en **funktion** som slumpar vikten (använd din generella tärningsfunktion från workshop 6) på de 6 hundarna i uppgift 3. Funktionen tar **inga** parametrar.
   - En hund väger mellan 1 och 45kg.
   - Hundarna finns i en global variabel som funktionen använder.
6. Skriv en funktion som konverterar din lista av hundar till en JSON sträng.
    - En parameter, lista av hundar
    - Returnerar JSON-sträng
7. Bonus / Lite svårare: Omvandla följande sträng till ett javascript objekt. Skapa en funktion som returnerar hunden med högst vikt.

```
[{"namn":"Fido","ras":"Border Collie","vikt":12},{"namn":"Labbe","ras":"Labbe","vikt":4},{"namn":"Snudden","ras":"Fox Terrier","vikt":1},{"namn":"Loppan","ras":"Tax","vikt":41},{"namn":"Bubben","ras":"Rottweiler","vikt":24},{"namn":"Ronja","ras":"Bearded Collie","vikt":41}]
```


## Facit

````

// --- 
// Uppgift 1
let hund = {
    namn: "Fido",
    ras: "Border Collie",
    vikt: 17
};
console.log(hund);

/// Uppgift 2
function skapaHund(parameterNamn, parameterRas, parameterVikt) {
    let hund = {
        namn: parameterNamn,
        ras: parameterRas,
        vikt: parameterVikt
    };
    return hund;
}
let nyHund = skapaHund("Plutten", "Dobberman", 30);
console.log(nyHund);
console.log(skapaHund("Fido", "Pudel", 23));

// Uppgift 3
// const alt1 = [ 1, 2, 3... ];
const alt1 = [
    {
        name: "Plutten",
        ras: "Dobberman",
        vikt: 30
    },
    {
        name: "Fido",
        name: "Pudel",
        vikt: 23
    }
];

const alt2 = [
    skapaHund("Plutten", "Dobberman", 30),
    skapaHund("Fido", "Pudel", 23)
];

const listaAvHundar = [
    skapaHund("Plutten", "Dobberman", 30),
    skapaHund("Fido", "Pudel", 23),
    skapaHund("Ragnar", "Tax", 8),
    skapaHund("Maja", "Labrador", 12),
    skapaHund("Boss", "Border Collie", 17),
    skapaHund("Snuttan", "Irländsk Setter", 21)
];
console.log(listaAvHundar);

// Uppgift 4
function medelVikt(hundlista) {
    let summa=0;
    for(let i=0;i<hundlista.length;i++) {
        let hund = hundlista[i];
        summa += hund.vikt;
    }
    let medelvikt = summa / hundlista.length;
    return medelvikt;
}

console.log('Medelvikt = ' + medelVikt(listaAvHundar));

// Uppgift 5
function generellTärning(minstaTal, högstaTal) {

    let min = Math.floor(minstaTal);
    if (isNaN(min)){
        console.log('minstaTal är inte ett tal');
        return undefined;
    }
    let max = Math.floor(högstaTal);
    if (isNaN(min)){
        console.log('högstaTal är inte ett tal');
        return undefined;
    }
    return min + Math.floor(Math.random()*(max-min+1));
}

function slumpNyVikt(){
    for (let i=0;i<listaAvHundar.length;i++) {
        let hund = listaAvHundar[i];
        let slumptal = generellTärning(1, 45);
        hund.vikt = slumptal;
    }
}
slumpNyVikt();
console.log(listaAvHundar);

// Uppgift 6

function konverteraTillJSON(hundLista) {
    let s = JSON.stringify(hundLista);
    return s;
}

let jsonSträng = konverteraTillJSON(listaAvHundar);
console.log(jsonSträng);

// Uppgift 7

jsonSträng = '[{"namn":"Fido","ras":"Border Collie","vikt":12},{"namn":"Labbe","ras":"Labbe","vikt":4},{"namn":"Snudden","ras":"Fox Terrier","vikt":1},{"namn":"Loppan","ras":"Tax","vikt":41},{"namn":"Bubben","ras":"Rottweiler","vikt":24},{"namn":"Ronja","ras":"Bearded Collie","vikt":41}]';
let hundListaUppg7 = JSON.parse(jsonSträng);
function hittaMaxVikt(hundLista) {
    let störstHund;
    for(let i=0;i<hundLista.length;i++) {
        let hund = hundLista[i];
        if(störstHund == undefined) {
            störstHund = hund;
        } else {
            if(hund.vikt > störstHund.vikt) {
                störstHund = hund;
            }
        }
    }
    return störstHund;
}

let tjockastHund = hittaMaxVikt(hundListaUppg7);
console.log(tjockastHund.namn);

```