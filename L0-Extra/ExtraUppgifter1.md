# Extra uppgifter 1

Frivilliga extra övningsuppgifter. 

1. Skapa en funktion som beräknar omkretsen på en cirkel. 
    - Funktionen skall heta **getCircumference**
    - Den skall ta en parameter **radie**
    - Formlen för att beräkna radien är 
    ```2 * Math.PI * radie```
    - Omkretsen skall returneras

2. Skapa en loop som räknar från 3 till 17
    - Använd for
    - Skriv ut räknaren i loopen

3. Skapa en loop som räknar från 37 till 9 men bara udda tal. 
    - Använd for
    - Skriv ut räknaren i loopen

4. Skapa en array med talen 10, 20, ... 100 med hjälp av en for-loop.
    - Skapa en tom lista
    - Skapa en for-loop som går från 10 till 100 i increment om 10
    - Stoppa in räknaren i listan i din loop.  

5. Skapa ett nytt objekt för en bil. 
    - Skall ha attributet "make" (t.ex. Volvo)
    - Skall ha attributet "milage" (t.ex. 10000)

6. Skapa en funktion som skapar bil-objekt. 
    - Funktionen skall ta 2 parametrar (make, milage)
    - Om milage är odefinierat skall den bli 0 som standard
    - Funktionen returnerar ett objekt

7. Lägg till en ny parameter till ditt object 
    - Skapa ett objekt; bil('Toyota', 8000)
    - Lägg till ett nytt atrribut; owner
    - Tilldela owner attributet ditt namn

8. Skapa en funktion som skriver ut ditt bil-objekt på ett snyggt sätt. 
    - Skapa en funktion som tar en bil som parameter
    - Skapa och returnera en sträng som ser ut så här: 
    ```<make> som har gått <milage>```
    - Returnera strängen

## Facit
```
//
// Uppgift 1
//
function getCircumference(radie) {
    return Math.PI * 2 * radie;
}
console.log('Omkretsen är ' + getCircumference(5) + ' om radien är 5');

//
// Uppgift 2
//
for(let i=3;i<=17;i++){
    console.log(i);
}

//
// Uppgift 3
//
for(let i=37;i>=9;i-=2) {
    console.log(i);
}

// 
// Uppgift 4
//
let minLista = [];  // Tom lista
for(let i=10;i<=100;i+=10) {
    minLista[minLista.length] = i;      // alternativt minLista.push(i);
}
console.log(minLista);

//
// Uppgift 5
//
let minBil = {
    make: 'Volvo',
    milage: 10000
};
console.log(minBil);

// 
// Uppgift 6
//
function skapaBil(make, milage = 0) {
    return {
        make: make,
        milage: milage
    };
}
console.log(skapaBil('lada'));

// 
// Uppgift 7
//
let toyota = skapaBil('Toyota', 8000);
toyota.owner = "Martin Haagen";
console.log(toyota);

//
// Uppgift 8
//
function printCar(car) {
    return car.make + ' som har gått ' + car.milage;
}
console.log(printCar(toyota));

```
