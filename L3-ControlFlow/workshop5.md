# Workshop 5

Övningsuppgift. Arrayer (listor) och loopar.

Slumpa 100 frukter och se hur många av varje vi fick.

1. Skapa en array som innehåller 5 strängar - kan vara t.ex. 5 olika godis sorter, frukter etc
2. Skapa med hjälp av en for-loop en array med 100 slumpade väden från den första arrayen. Dvs slumpa ett tal mellan 1 och 5 - välj värde från arrayen som skapades i 1 och stoppa in i den nya arrayen. Repetera 100 gånger.
3. Lopa igenom arrayen från 2 och räkna hur många av respektive värde som finns.
4. Skriv ut svaret i consolen.

Resultatet borde se ut ungefär så här:

Banan=19
Äpple=22
Melon=17
Sjärnfrukt=23
Papaya=20


## Facit

```
//
// Uppgift 1
//
let frukter = ["Banan", "Äpple", "Melon", "Sjärnfrukt", "Papaya"]
console.log(frukter);

// Uppgift 2

// loop - 100gr
    // slumpa ett värde mellan 1-5
    // välja frukt från "frukter"
    // stoppa in frukt i ny lista
let slumpadeFrukter = [];
for(var i=0; i<100; i++){
    let slumpTal = Math.floor(Math.random() * 5) + 1;       // Slumptal 1-5
    //console.log(slumpTal);
    let slumpadFrukt = frukter[slumpTal-1];   // frukter har index 0-4
    //console.log(slumpadFrukt);
    slumpadeFrukter[i] = slumpadFrukt;
} 
console.log(slumpadeFrukter);

let Banan=0;
let Äpple=0;
let Melon=0;
let Sjärnfrukt=0;
let Papaya=0;

for (let i=0; i < slumpadeFrukter.length; i++) {
    let frukt = slumpadeFrukter[i];
    switch(frukt) {
        case 'Banan':
            Banan++;
            break;
        case 'Äpple':
            Äpple++;
            break;
        case 'Melon':
            Melon++;
            break;
        case 'Sjärnfrukt':
            Sjärnfrukt++;
            break;
        case 'Papaya':
            Papaya++;
            break;                                    
    }
}
console.log(`
Banan=${Banan}
Äpple=${Äpple}
Melon=${Melon}
Sjärnfrukt=${Sjärnfrukt}
Papaya=${Papaya} 
`);

let antalFrukter = []; // '
for (let i=0; i < slumpadeFrukter.length; i++) {
    let frukt = slumpadeFrukter[i];
    if(antalFrukter[frukt] === undefined) {
        antalFrukter[frukt] = 1;
    } else {
        antalFrukter[frukt] = antalFrukter[frukt] + 1;
    };
}
console.log(antalFrukter);
```