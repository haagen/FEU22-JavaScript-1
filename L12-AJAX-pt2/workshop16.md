# Workshop 16

Arbeta med AJAX och andra servrar. Testa att använda den nyare funktionen fetch för att lösa samma utmaning som vi hade i [Workshop 15](Workshop15.md).

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

1. Skapa en ny boiler plate (eller arbeta vidare från Boiler platen från uppgift 15).
2. Skapa en ny funktion som du kallar för fetchData. Använd "async" för att dekorera den.
3. Anropa funktionen fetchData() när din sida laddas.
4. Anropa API:et med hjälp av fetch(). Använd "await".
5. Kontrollera att API:et returnerade svar som visar på att anslutningen gick bra.
6. Läs in datan. Använd "await".
7. Tänk på att svaret från servern kommer som en text-sträng som innehåller JSON. På valfritt sätt konvertera svaret till JavaScript format. Och skriv ut "activity" i console.log.

## Facit

Se workshop16.html och workshop16.js för lösningsförslag.
