# Workshop 3

1. Skapa en ny stubb
2. Skapa en kodsnutt som m.h.a. template-strängar skriver ut ditt namn, din adress och ditt telefon-nummer - på tre olika rader.
3. Skapa ett program som räknar ut omkretsen på en cirkel - man skall spara radien i en variabel (o = 2*pi*r )
4. En användare anger radien r = "2.35 cm" - typkonvertera till ett tal och beräkna omkretsen.
5. Skapa en array som innehåller talen 1 - 10
6. Ändra värdena i din array så att dem innhåller 10 - 1 utan att definiera om arrayen.
7. Skriv en kodsnutt som räknar ut summan av alla talen i arrayen

## Facit

```
console.log('>> Workshop 3 <<');

// Uppgift #2
let namn = 'Marcus';
let s1=`${namn} Frida nilssons väg 4 0702037008`;
console.log(s1);

// Uppgitf #3
let r1 = 10;
const pi = 3.14;
let o1 = (2 * pi * r1);
console.log(o1);

// Uppgift #4
let r = "2.35 cm";
let o = 2 * pi * parseFloat(r);
console.log(o);

// Uppgift #5
let tal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Uppgift #6
tal[0] = 10;
tal[1] = 9;
tal[2] = 8;
tal[3] = 7;
tal[4] = 6;
tal[5] = 5;
tal[6] = 4;
tal[7] = 3;
tal[8] = 2;
tal[9] = 1;
console.log(tal);
tal.reverse();

// Uppgift #7
let summa = tal[0] + tal[1] + tal[2] + tal[3] + tal[4] + tal[5] + tal[6] + tal[7] + tal[8] + tal[9];
console.log(summa);

```
