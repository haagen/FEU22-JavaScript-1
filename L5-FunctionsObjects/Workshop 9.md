# Workshop 9

Document Object Model

Träna på

- getElementById()
- getElementByClassName()
- getElementByTagName()
- querySelector()

textContent, innerHTML - för innehåll i noderna.

[Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)

[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)

1. Skapa en HTML-sida med:

   - H1-rubrik (id="rubrik")
   - tre paragrafer med class="content"
   - formulär (kontakt)
     - input-fält med namn (id="namn")
     - input-fält med e-post (id="epost")
     - text-fält för meddelande (id="meddelande")
     - knapp
   - Skapa en div (id="resultat", class="hidden") som har en p (class="content") som har en span (class="obs").

2. Skapa en kod. Använd getElementById() för att hämta din rubrik. Skriv rubriken till consolen.
3. Skapa en kod. Använd getElementsByClassName() för att hämta alla paragraferna med en content class. Hur många har vi?
4. Skapa en kod. Använd getElemenstByTagName() för att hämta rubriken (h1) och skriv ut den i en alert() ruta.
5. Skapa en kod. Använd querySelectorAll() för att hämta elementet/elementen:
   - a: span (class="obs") - skriv ut dess innehåll i console.log
   - b: p (class="content") - alla, skriv ut allas innehåll i console.log
   - c: p (class="content") - den som finns i div-taggen efter form, bara den.
6. Skapa en funktion som returnen hur många "input" element som finns på sidan (i DOM:en)
   - Skapa en funktion
   - Sök i DOM:en efter alla INPUT - element
   - Räkna antalet svar
   - Returnera

## Facit

Se workshop9.html och workshop9.js
