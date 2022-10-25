# Workshop 6

Funktioner.

1. Skapa en funktion som heter min som returenerar det minsta av två tal.
2. Ändra funktionen som du skapade i 1 men som kan hantera upp till 5 parametrar.
3. Vi skapade en kod som kunde vara en tärning med godtyckligt många sidor:

```

  let sidor = 6;
  let minstaTal = 1
  let högstaTal = sidor;  // Tärning 1 - 6

  let tärningsKast = minstaTal + Math.floor(Math.random()*(högstaTal-minstaTal+1));
  console.log(`Täningskast = ${tärningsKast}`);

```

a. Skapa en funktion som har två parametrar; största respektive minsta sidan på din tärning.
- slumpa fram ett tärningskast
- returnera värdet
- Bonus om du får ett decimaltal i någon av parametrarna, klipp av / tabort decimalerna så att du får heltal.
- Bonus (om du får tid över): skriv ut ett felmeddelande och returnera undefined om någon av parametararna inte är ett gilgitg nummer.
  b. Skapa en funktion som inte tar några parametrar. Funktionen skall vara en 6-sidig tärning.

4. Vad händer om man tarbort "else" från vår max-funktion?

```
function max(tal1, tal2) {
    if (tal1>tal2) {
        return tal1;
    // } else {      (tabort)
        return tal2;
    // }             (tabort)
}
```

Förklara!

5. Skapa en funktion som räknar ut summan av alla tal i en lista (array).
   - Skriv en egen funktion som loopar igenom array:en
   - Kontrollera att värdet är ett tal innan du försöker addera det
   - Om inga tal finns i listan skall funktionen returnera undefined

## Facit

```
let l = function(m) { console.log(m); };
//
// Uppgift 1
//
function min(tal1, tal2) {
    if(tal2 === undefined) {
        return tal1;
    }
    if (tal1<tal2) {
        return tal1;
    }
    return tal2;
}
l(min(3, 1));

//
// Uppgift 2
//
function min2(tal1, tal2, tal3, tal4, tal5) {
    let minstaVärde = min(tal1, tal2);
    minstaVärde = min(minstaVärde, tal3);
    minstaVärde = min(minstaVärde, tal4);
    minstaVärde = min(minstaVärde, tal5);
    return minstaVärde;
}
l(min2(5, 1, 3, -12, 7));

//
// Uppgift 3a
//
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
l(generellTärning(1, 32));
l(generellTärning('m', 12));

//
// Uppgift 3b
//
function tärning6() {
    return generellTärning(1,6);
}
l(tärning6());

//
// Uppgift 4
//
/*

Exekvering av kod slutar efter return. Det blir därför ingen skillnad.

*/

//
// Uppgift 5
//


function listSumma(lista){
    let summa = 0;
    let värde = false;

    for(let i=0; i<lista.length; i++) {
        if(!isNaN(lista[i])) {
            summa += lista[i];
            värde = true;
        }
    }
    if (!värde) {
        return undefined;
    }
    return summa;
}

let listaAvTal = [1, 2, 3, 'm']; // Summan är 6
l(listSumma(listaAvTal));
l(listSumma(['a', 'b', 'c']));
l(listSumma([]));

```
