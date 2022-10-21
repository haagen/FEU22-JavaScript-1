# Workshop 4

Kontrollflöden if / for

1. Uppgift 3.4 beräknade omkretsen baserat på användarens input. Ändra koden (eller skapa en nykodsnutt) som bara beräknar radien om användaren ger ett giltigt tal. (NaN, isNaN() )
2. Om användaren har gett ett ogiltigt nummer - skriv ett felmeddelande
3. Definiera en tom array (let a = [];) - skapa en for-loop som populerar den men värdena 1 - 10
4. Skriv en for-loop som byter ordning på talen i arrayen till 10 - 1
5. Skapa en for-loop som fyller en array med alla tal mellan 1 och 100
6. Räkna ut summan av alla jämna tal i array:en som skapades i 5 (jämt delbara med 2 - dvs <tal> % 2 == 0)

## Facit

```

console.log('--> Workshop 4 <--');

// Uppgift #1, #2
const pi=3.14;
let r = "Martin";
if(isNaN(r) != true) { //isNan("Martin") == true, != inte lika med
    let o = 2 * pi * parseFloat(r);
    console.log(o);
} else {
    console.log('This is not a valid number');
}
let radie = parseFloat(r);
if(!isNaN(radie)) { // ! vänder på ett boolean värde dvs !true = false, !false = true
    let o = 2 * pi * parseFloat(radie);
    console.log(o);
} else {
    console.log('This is not a valid number');
}

if (isNaN(r)) {
    console.log('This is not a valid number')
  } else {
    console.log(o)
  }

// Uppgift #3

let a1 = []
for (i = 0; i < 10; i++)
{
    a1[i] = i+1;
}
console.log(a1);
/*
// Uppgift #4
// Alternativ 1
for ( let i=0; i<a1.length; i++ ) {
    a1[i]=a1.length -i;       // a[0] = 10 - 0 = 10, a[1] = 10 - 1 = 9
}
    console.log(a1)
*/

// Alternativ 2
for(let i=0;i<a1.length/2;i++) { // 0 -> 4
    let t = a1[i]; // Spara tillfälligt
    a1[i] = a1[a1.length-i-1]; // Ta värdet i cell 9 och spara i 0, 8 i 1, osv
    a1[a1.length-i-1] = t; // Spara tillfälliga värdet i sista positionen
}
console.log(a1);


// Uppgift #5
let b = [];
for (let o=0; o<100; o++ )
   b[o]=o+1;

   console.log(b);

// Uppgift #6
let summa = 0;
for(let i=0;i<b.length;i++) { // i: 0 -> 100
    if(b[i] % 2 == 0) { // Är det jämt
        summa = summa + b[i]; // Om ja, lägg till summan
    }
}
console.log(summa);

```
