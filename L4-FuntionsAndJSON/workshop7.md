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

```