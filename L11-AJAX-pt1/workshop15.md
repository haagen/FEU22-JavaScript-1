# Workshop 15

Arbeta med AJAX och andra servrar.

Hämta ett tips för en kul aktivitet en dag då du känned dig uttråkad.

http://www.boredapi.com/api/activity/

Är en webbtjänst som ger tips på aktiviteter. Ett anrop ger en JSON tillbaka som innehåller följande data:

```
{
  "activity": "Make a to-do list for your week",
  "type": "busywork",
  "participants": 1,
  "price": 0,
  "link": "",
  "key": "5920481",
  "accessibility": 0.05
}
```

Ge användaren ett förslag på en aktivitet.

1. Skapa en ny boiler plate.
2. Skapa en callback-funktion för att hantera AJAX-svar (onLoad() kan den kallas).
3. Skapa en ny XMLHttpRequest (xhr)
4. Konfigurera din xhr att ansluta till API:et asynkront (open)
5. Koppla ihop din xhr med din callback (addEventListner / onload)
6. Uppdatera din callback - den skall undersöka om requesten gick ok.
   a) om den falerade - skall den skriva ett felmeddelande i konsollen (status)
   b) om den fungerade gör 7 & 8
7. Resultatet från API:et är en sträng med ett JSON-objekt. Omvandla det till ett JS-objekt (i din callback) (JSON.parse)
8. Skriv ut aktiviteten (activity attributet) till användren i konsollen
9. Bonus! Förändra din kod så att din xhr automatiskt konverterar ditt svar till json. (responseType)

## Facit

Se workshop15.html och workshop15.js. 