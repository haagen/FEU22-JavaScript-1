# Workshop 18

I denna övning skall vi öva på att arbeta med asynkron-programmering framförallt med användandet av **Promises** och nyckelorden **Async** och **Await**.

## Del 1 - Promises

Vi skall skapa och arbeta med promises för att få en känsla för hur de fungerar.

1. För att använda Promises måste vi använda en funktion som är byggd för detta. Låt oss skapa en funktion som är det som vi kan använda som exempel.

   - Skapa en ny funktion "myTimer". Den tar två argument "resolve" och "reject".
   - Skriv kod i funktionen som använder setTimeout för att vänta i 5 sekunder och sedan skriver den ut en text i konsollen.
   - Testa din funktion och se att din text kommer ut i konsollen efter 5 sekunder.
   - I setTimeout's callback, där du skrev ut texten till konsolen, anropa resolve(). Du kan gen den "OK" som argument.

   Nu har vi en enkel funktion som väntar i 5 sekunder och sedan "resolvar" den.

2. Kör funktionen från #1 med ett Promise

   - Skapa ett nytt promise som kör funktionen från #1.
   - Spara ditt promise i en variabel.
   - Vad händer om du kör koden nu?
   - Din variabel innehåller nu ett promise - låt oss ge den ett callback i "then" så att vi kan agera när timern är klar.
   - I then() skriv ut resultatet från myTimer i konsollen. (Den borde skriva ut "OK") efter 5 sekunder.

3. Vi skall nu använda chaining för att koppla ihop våra promise. För att göra det skall vi returnera ett nytt promise i then().
   - Fortsätt att arbeta i then()-callbacken från #2.
   - Skapa ett nytt promise som åter igen anropar myTimer.
   - Promise objektet som skapas skall returneras
   - Skapa ytterligare en then() i en kedja efter första then() anropet.
   - Skriv återigen ut resultatet från myTimer i konsollen. (Du borde nu se OK två gånger med 5 sekunders mellanrum).

## Del 2 - Async / Await

Async och Await är ett sätt att arbeta mer effektivt med Promises. Vi skall nu göra samma sak som i del 1 fast använda detta sättet i stället. Vi kommer fortsatt använda den asynkrona metoden myTimer som vi skapade tidigare.

1. Vi kan bara använda await i en funktion som är dekorerad med async. Låt oss börja med att skapa den funktionen.

   - Skapa en ny funktion som du kan kall "runTimers".
   - Funktionen skall inte ta några parametrar.
   - Dekorera den med "async"
   - I funktionen kan du skriva ut något till konsollen.
   - Testa att anropa funktionen.

2. Await förväntar sig att funktionen returnerar ett promise. Vår myTimer funktion gör inte detta. Vi behöver därför se till att den körs i ett promise. Vi skapar en ny funktion som hjälper oss med detta.

   - Skapa en funktion som du kallar för "makePromisable"
   - Funktionen skall ta ett argument "func".
   - Funktionen skall skapa och returnera ett promise.
   - Promises skall köra "func" - vi förväntar oss altså att det finns en funktion som argument.

3. Nu kan vi uppdatera vår "runTimers" att köra vår timer funktion.
   - Skapa en variabel "myPromise"
   - Tilldela myPromise - ett nytt promise med hjälp av "makePromisable" dår du använder "myTimer" som argument.
   - Skapa en ny variabel "response"
   - Tilldela variablen resultatet av "await myPromise"
   - Skriv ut response i konsollen
   - Kör en timer till (på samma sätt som tidigare punkter här i #3).
   - Kontrollera att du anropar funktionen runTimers - annars kommer inget att hända.

## Del 3 - Fundera, testa och ge ett svar på

1. Följande kod

```
let resp = fetch(url);
```

- Vad finns i "resp"?
- Vilka två alternativ har jag för att vänta på ett svar? (Skriv kod exempel)

2. Följande kod

```
async function myFunction() {

}

let resp = myFunction();
```

- Vad finns i "resp"?
- Skriv en kod ett kod exempel på hur man får ut ett resultat från den.

3. Följande psudokod

```
/* Example json response
{
    "status": "ok"
}
*/

let myPromise = new Promise(function(resolve, reject) {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // ***
        })
});

myPromise.then((status) => {
    console.log('Statusen på servern är: ' + status);
});

```

- Vad behöver jag göra i koden (\*\*\*) för att jag skall få ut en status ur promisen?
- **(Svårare):** Om fetch får ett fel. Vad behöver jag ändra för att hantera det på ett bra sätt?

## Facit
