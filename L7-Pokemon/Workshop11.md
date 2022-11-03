# Workshop 11

Mer DOM övningar.

1. Skapa en ny html stubb / boiler plate.
2. Skapa taggar för
   a) En knapp - id = createImage
   b) En div - id = result
3. I ditt JavaScript - skapa en funktion som heter "createImageClick". Funktionen tar inga parametrar.
4. Skapa en funktion som du kallar för init - den tar inga parametrar - skall köras automatiskt när scriptet körs.
5. I init() - skapa en "event listener" för knappen - den skall anropa funktionen du skapade i 3.
6. Lägg till en bild i din result div (genom att använda document.createElement funktionen) när användaren klickar på knappen.
   a) Sök upp div:en med id "result".
   b) Skapa en ny tag med hjälp av document.createElement()
   c) Ge den nya taggen attribut (src) så att den kan visa en bild.
   d) Lägg in bilden taggen i div-taggen.
7. Trycker du flera gånger på din knapp kommer bilden att visas flera gånger. Ändra din createImageClick funktion så att den "togglar" vid klick på knappen. Dvs visa bild vid första klick, töm div vid andra klick, visa bild vid tredjd klick osv...
   a) tips - du kan titta om resultat-div:en är tom innan du stoppar in något i den.

## Facit

Se workshop11.html / workshop11.js
