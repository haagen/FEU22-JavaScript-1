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
   - Om ett inga tal finns i listan skall funktionen returnera undefined
