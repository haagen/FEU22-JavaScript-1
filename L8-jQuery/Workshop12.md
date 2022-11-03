# Workshop 12

jQuery

1. Skapa en ny html stubb / boiler plate.
2. Ladda in jQuery
   `<script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>`
3. Skapa taggar för
   a) En knapp - id = createImage
   b) En div - id = result
4. I ditt JavaScript - skapa en funktion som heter "createImageClick". Funktionen tar inga parametrar.
5. Skapa en funktion som du kallar för init - den tar inga parametrar - skall köras automatiskt när scriptet körs. Använd document.ready() för att göra detta.
6. I init() - skapa en event listner för knappen - den skall anropa funktionen du skapade i 4. Använd jQuery.
7. Lägg till en bild i din result div (använd jQuery).
   a) Sök upp div:en med id "result".
   b) Skapa en ny tag med hjälp av $('&lt;tag&gt;')
   c) Lägg in bilden taggen i div-taggen.
8. Trycker du flera gånger på din knapp kommer bilden att visas flera gånger. Ändra din createImageClick funktion så att den "togglar" vid klick på knappen. Dvs visa bild vid första klick, töm div vid andra klick, visa bild vid tredjd klick osv...
   a) tips - du kan titta om resultat-div:en är tom innan du stoppar in något i den.
