# Workshop 17

I denna övning skall vi träna och experimentera med callbacks. Den består av två delövningar - läs igenom hela delövningen innan du börjar. 

## En funktion som tar en callback

Vi skall nu skapa en funktion som, precis som setTimeout, tar en callback som en parameter. Funktionen gör inget mer än att köra en callback. 

1. Skapa callback-metod. 
    a) Skapa en funktion som heter myCallback. Den tar en parameter "message".
    b) I myCallback skriv ut "In myCallback: <message>" i konsollen. 
2. Skapa en funktion som tar en callback
    a) Skapa en funktion som heter myFunction. Den tar två parametrar: "callback", "theText". 
    b) myFunction skall anropa "callback" och ange "theText" some ett argument till funktionen. 
    c) När du anropar en funktion skall du ha paranteser efter namnet annars får du en referens till funktionen.
3. Anropa "myFunction" från #2 med "myCallback" från #1 som parameter och en valfri text som det andra argumentet. 
    a) callback argumentet skall vara en referens till en funktion - därför skall du inte använda () efter funktionens namn. 

Funktionerna vi har skapat här är synkrona och körs en efter vartannat. 

## Skapa en asynkron funktion med callback

Nu skall vi skapa en asynkron-funktion som anropar en callback när den har avslutat sin exekvering. Vår funktion skall räkna ner från ett tal vi anger till 0 - och sedan körs vår callback. Det skulle kunna se ut så här:

```
5
4
3
2
1
GO
I min callback!
```

**Varning!** Risk för att blanda ihop callbacks. Vi skapar en funktion som tar en callback - den kallar jag för callback (1). Vi använder setTimeout som också tar en callback - den kallar jag för callback (2).

1. Skapa vår funktion "countDownTimer". Den skall ta två parametrar; numberOfSeconds som är antalet sekunder den skall räkna ner och callback (1) som är en funktion som skall köras när vi har kommit till 0. 
2. Vi skall använda setTimeout för att skriva ut ett meddelande varje sekund och köra vårt callback (1) när vi har kommit till 0. Vi skall schemalägga en setTimeout för varje sekund i intervallet. Det betyder att vi behöver en loop som går från 0 -> antalet sekunder. Skapa en for-loop i countDownTimer som går från 0 -> antalet sekunder. 
3. I for-loopen använd setTimeout för att vänta "i" sekunder. 
    a) setTimeout(callback (2), timeout)
    b) Tänk på att timeout är i millisekunder
    c) callback (2) till setTimeout skall vara en arrow-funktion. Det räcker att den skriver ut **i** till konsollen. (Utskriften till konsollen skall senare raderas). 
    d) Du kan testa att köra countDownTimer - ange endast första argumentet och sätt det till 5. Du bör se en räknare som räknar upp 0 till 5.
4. Uppdatera callback:en (2) för setTimeout. 
    a) Om i är lika med numberOfSeconds (dvs vi har kommit till slutet) - skall du skriva ut "GO" och sedan anropa numberOfSeconds callback (1) parameter.
    b) Om i inte är like med numberOfSeconds skall du skriva ut vilken sekund vi är på - tänk på att vi räknar ner (dvs numberOfSeconds - i).
    c) Radera raden (om den finns kvar) som skriver ut i från 3c.
5. Vi skall nu testa funktionen. Anropa countDownTimer med argumenten (uppdatera #3d)
    a) numberOfSeconds = 5
    b) callback = () => { console.log('The cat is out of the hat!'); }

Vi har nu skapat en Asynkron-metod som anropar vår callback först när sista sekunden har paserats. 