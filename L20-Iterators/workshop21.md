# Workshop 21

Denna övningen går ut på att öva att använda iteratorer samt lite repetitions övningar.

## Deluppgift 1

Vi skall skapa en array med frukter. Denna skall vi loopa över på flera olika sätt.

1. Skapa en array med 10 frukter.
2. Skapa en for-loop som **inte** använder sig av en iterator - dvs den skall använda en index variabel - skriv ut frukterna en, efter en, i konsollen.
3. Skapa en for-loop som använder sig av en iterator - dvs du skall skapa en iterator från din array som du sedan använder i en for-loop. Skriv ut värdena en, efter en, i konsollen.
4. Skapa en for-loop som **inte** använder sig av en iterator - skriv ut frukterna, en efter, fast i omvänd ordning i konsollen.
5. Skapa en for-loop som använder sig av en iterator - dvs du skall skapa en iterator från din array som du sedan använder i en for-loop. Skriv ut värdena en, efter en, i konsollen fast i omvänd ordning. (Lägg max 5 minuter på att lösa denna uppgift).

## Deluppgift 2

I denna uppgiften skall vi använda får frukt-lista från uppgift 1 men skriva ut den i en listvy på webbsidan. (Samt lite repetition på andra saker).

1. Skapa en &lt;ul&gt;-lista på din websida. Ge den ett id så att du enkelt kan hitta den på nytt.
2. Hämta en referens till din ul-tag i DOM:en.
3. Loopa igenom din frukt-array med hjälp av en for-loop som använder en iterator. Skapa en rad i din lista (från 2) för varje element i din array.
4. Skapa en timer som väntar i 5 sekunder. Sedan skall den ta bort innehållet i listan.

## Deluppgift 3

I denna uppgiften skall vi träna på att göra ett AJAX-anrop som använder sig av POST istället för GET.

1. Skapa en async funktion - du kan kalla den doPost()
2. I doPost() - gör med hjälp av await och fetch ett AJAX-anrop till [http://apps.mbh.se:8080/](http://apps.mbh.se:8080/) (detta är en mock-funktion - den svarar alltid success: ok - oavsett vad du skickar till den).
3. Anropa din doPost() i koden. Titta i chromes / din browsers utvecklingsverktyg (där konsollen finns) - du har en "tab" som heter network. Här kan du se din request till apps.mbh.se samt dess svar. Titta på "Headers" och "Request Headers" (Du kan behöva trycka på "View Source")
   - vad säger den första raden i din Request Header?
   - har du någon rad som heter "Content-Type"?

**Repetition**
fetch gör en "GET" request per automatik. I en GET skickar man data i adressen / url:en. Vi vill ha möjligheten att skicka mycket data och behöver därför använda en "POST" request i stället. Post skickar datan i kroppen på requesten i stället.

Content-Type är en flagga i headern som beskriver innehållet i "bodyn". Detta hjälper servern att vet hur den skall tolka frågan. Du kan också hitta Content-Type i svaret från servern.

4. Nu skall vi uppdatera doPost(). Innan du anropar fetch:

   - Skapa ett nytt objekt som du kallar för data.
   - Ge data-objektet ett attribut som heter "meddelande" - du kan tilldela den värdet "Hello World".
   - Använd JSON.stringify för att konvertera data objektet till en sträng.
   - Skriv ut data objektet i konsollen och kontrollera att det är en JSON-sträng.
   - Skapa ytterligare ett objekt som du kallar för options. Detta objektet kommer vi strax använda för att ändra hur ditt fetch()-anrop beter sig.
   - Ge options objektet ett attribut som du kallar för "method" - tilldela det värdet "POST".
   - Ge options objektet ett attribut som du kallar för "body" - tilldela det den JSON-strängen av data-objektet.
   - Uppdatera ditt fetch-anrop. Lägg ditt nya options objekt som ett argument efter adressen. (dvs fetch(url, options))

5. Kör ditt script. Gå tillbaka till utvecklarverktygen i webbläsaren och undersök din Request Header (se 3):

   - vad säger den första raden i din Request Header?
   - har du någon rad som heter "Content-Type"?

Genom att använda ett options objekt till fetch har du ändrat dess beteende från att vara GET till POST och du har också skickat en JSON-sträng till servern.
