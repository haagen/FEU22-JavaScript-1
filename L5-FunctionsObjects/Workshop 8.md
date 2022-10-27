# Workshop 8

Objekt, Funktioner och Classer

## Uppgifter

1. Skapa en funktion **superAlert** som tar en parameter **meddelande**. Meddelandet skall skrivas ut både med hjälp av alert() och console.log().
2. Skapa en funktion **miniAlert** som tar en parameter **meddelande**. Meddelandet skall skrivas ut med console.log() (inte alert()).
3. Skriv en kodsnutt som väntar i 2 sekunder och sedan skriver ut "Hej Världen". Du skall använda din superAlert funktion från 1 för att skriva ut texten.
   - Använd setTimeout() - [Referens](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
4. Skriv en kodsnutt som väntar i 4 sekunder och sedan skriver ut "Hej igen världen". Du skall anropa din miniAlert funktion från 2 för att skriva ut texten.
5. Skapa en kodsnutt som väntar i 1/2 sekund och sedan skriver en text i console:en - koden som körs skall definieras med hjälp av en arrow-funktion.
6. Skapa en Class för ett Pokemon-kort
   - Ge klassen namnet Pokemon
   - Två parametrar i konstruktorn (name och hp)
7. Skapa en Method i klassen som heter "fight" som tar en parameter (opponent) - "opponent" skall vara en annan Pokemon och funktionen skall returnera sant om denna pokemon har större hp än "opponenten".
   - Skapa metoden fight med en parameter opponent
   - Jämför denna (this) hp med opponent.hp - om this.hp &gt; opponent.hp returnera sant, annars faskt.
8. Skapa en två pokemons (Pikachu, 60), (Raichu, 90). Vem vinner om Pikachu utmanar (fight()) Raichu?
   - Skapa en if-sats som skriver ut vinnaren
9. Skapa en metod i Pokemon-klassen som heter toString - den skall returnera en stäng som ser ut som `"Pokemon <namn> med <hp>hp"`
   - Skapa en metod i klassen Pokemon som heter toString()
   - Skapa en sträng som ser ut `"Pokemon <namn> med <hp>hp"`
   - Returnera strängen
   - Vad händer nu du kör console.log(pikachu)? Om pikachu är en instans av Pokemon?

## Facit

```

// 1

function superAlert(meddelande) {
    alert(meddelande);
    console.log(meddelande);
}

// 2
let miniAlert = function(meddelande){
    console.log(meddelande);
}

// 3
// setTimeout(functionRef, delay, param1)
//setTimeout(superAlert, 2000, "Hej Världen!");

// 4
//setTimeout(miniAlert, 4000, "Hej igen världen");

// 5
//let minFunction = (meddelande) => { console.log(meddelande); };
//setTimeout(() => {
//    console.log('Skriv ut texten');
//}, 500);

// 6 & 7
class Pokemon {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
    }

    fight(opponent) {   // opponent skall vara ett annat pokemon-kort
        if(this.hp > opponent.hp) {
            return true;
        }
        return false;
    }

    toString(){
        return `Pokemon ${this.name} med ${this.hp} hp`;
    }
}

// 8

const pikachu = new Pokemon('Pikachu', 60);
const raichu = new Pokemon('Raichu', 90);
if(pikachu.fight(raichu)) {
    console.log('Pikachu vann!');
} else {
    console.log('Raichu vann!');
}

// 9
//alert(pikachu);  // utan toString() [object Object], med toString() "Pokemon Pikachu med 60 hp"
console.log(""+pikachu);
```
