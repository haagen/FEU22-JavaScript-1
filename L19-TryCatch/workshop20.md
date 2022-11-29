# Workshop 20

I denna övningen skall vi träna på att använda

- Error-objektet
- try - catch

## Deluppgift 1

I denna deluppgift skall vi arbeta med form-validering när vi använder "vanilla" JavaScript och vi övar på att använda Error-objektet.

1. Skapa en tom BoilerPlate.
2. Skapa följande taggar i din html (du kan stjäla detta från Workshop 10 om du inte vill knappa in det på nytt):

```
<h2>Create Dog</h2><br/>
Name:<br/> <input type="text" name="name" id="name"><br/>
Breed:<br/> <input type="text" name="breed" id="breed"><br/>
Weight:<br/> <input type="text" name="weight" id="weight"><br/>
<button>Create Dog</button>
<br/><br/>
<span id="status" class=""></span>
```

3. Skapa en onclick handler för knappen. Skriv "Hello World" i en alert ruta. (se även WS10)
4. Skapa en **funktion** i din script-fil som hämtar och returnerar hundens vikt. **getDogWeight()**

   - använd getElementById för att hämta ut värdet i input:en för hundens vikt.
   - kontrollera om värdet är tomt - är det det - skapa ett Error objekt som skriver ut ett specifikt meddelande för detta förväntade fel. Returnera objektet.
   - kontrollera om värdet är ett tal - är det inte det - skapa ett Error objekt som skriver ut ett speciellt meddelande för detta förväntade fel. Returnera objektet.
   - Annars returnerar du vikten som ett tal (inte en sträng).

5. Uppdatera din onclick-handler för knappen. Den skall skriva ut i konsollen med röd text om det blev ett fel (instanceof). Om det inte blev ett fel rapporterar du hundens vikt till användaren genom att skriva "Hunden väger: <kg>" med en alert-ruta.

## Deluppgift 2

I denna deluppgiften skall vi fortsätta att arbeta med formuläret från deluppgift 1 och onclick-handlern som vi skapade där.

1. Skapa en **funktion** som hämtar ut hundens namn och validerar att det bara innehåller ett ord. Funktionen skall returnera hundens namn om namnet är korrekt annars skall ett undantag genereras. **getDogName()**

   - använd getElementById för att hämta ut värdet i input:en för hundens namn.
   - kontrollera att hundens namn bara är ett ord (trim() och indexOf(' '))
   - om hundens namn är mer än ett ord (innehåller space efter trim() genomförts) så skall du skapa ett nytt Error objekt - detta skall ha ett specifikt felmeddelande relaterat till denna situationen. Stoppa in hundens namn i ett eget attribut till Error. Kasta (throw) ditt nya felobjekt.
   - om hundens namn är ett ord (innehåller inte space) skall namnet returneras.

2. Anropa getDogName() i din onclick-handler (innan anropet till getDogWeight()). Vad händer om du fyller i ett hundnamn som har flera ord?
3. Nu skall vi slå-in getDogName() i en try - catch.

   - Om du får ett undantag när du kör getDogName() skall du skriva ut "&lt;hundens namn&gt; : &lt;fel meddelande&gt;" i konsollen. Datan skall nu finnas i ditt fångade error (exception).
   - Om du inte får ett fel skall du skriva ut namnet till konsollen.

## Deluppgift 3

Fel och asynkrona metoder. Try-Catch fungerar på synkrona metoder. För asynkrona metoder används andra strategier som vi talat om tidigre. Om du använder promise skall den göra reject() för alla typer av fel. Andra metoder har error-callbacks eller använder sig av error-events.

I denna deluppgift skall vi gå tillbaka till Workshop 15 och skapa en [error handler](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/error_event) / event för vårt Bored API.

1. Skapa en ny funktion som du kallar **myErrorHandler**. Funktionen skall ta ett argument som tar en parameter (event). Funktionen skall skriva ut hela "event" argumentet till konsollen.
2. Lägg till din nya funktion som en event-lyssnare för "error".
3. Testa din metod genom att köra din kod med en trasig URL.
