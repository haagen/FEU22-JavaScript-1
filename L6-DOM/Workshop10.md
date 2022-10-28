# Workshop 10

DOM, Event och Formulär.

## Uppgifter

1. Skapa en tom BoilerPlate.
2. Skapa följande taggar i din html:

```
<h2>Create Dog</h2><br/>
Name:<br/> <input type="text" name="name" id="name"><br/>
Breed:<br/> <input type="text" name="breed" id="breed"><br/>
Weight:<br/> <input type="text" name="weight" id="weight"><br/>
<button>Create Dog</button>
<br/><br/>
<span id="status" class=""></span>
```

3. Skapa en onclick handler för knappen. Skriv "Hello World" i en alert ruta.
4. <ins>Uppdatera din clickHandler</ins> - den skall med hjälp av getElementById hitta namnet på hunden och skriva ut det i alert rutan i stället.
5. <ins>Uppdatera din clickHandler</ins> - använd querySelectorAll - hitta input som har hundens vikt. Spara värdet/vikten i en variabel. Verifiera att du hittade vikten genom att skriva ut den till consolen eller med en alert.
6. <ins>Uppdatera din clickHandler</ins> - på valfritt sätt hitta "span"-taggen och spara Elementet i en variabel. Verifiera att du hittade den genom att skriva ut noden i consolen.
7. <ins>Uppdatera din clickHandler</ins> - undersök om hundens vikt är ett giltigt tal.
   a. Om det är ett giltigt tal - ändra texten i "span"-taggen till: "Thanks for participating".
   b. Om det är ett ogiltigt tal - ändra texten i "span"-taggen till: "Invalid number (Weight)".
8. Skapa två stylesheet klasser:
   a. success - med grön textfärg
   b. failure - med röd textfärg
9. <ins>Uppdatera din clickHandler</ins> - när hundens vikt undersöks
   a. Om det är ett giltigt tal - ge span-taggen "success" klassen
   b. Om det är ett ogiltigt tal - ge span-taggen "failure" klassen
10. Bonus / Extra / Lite svårare - <ins>Uppdatera din clickHandler</ins> - om det var ett ogiltigt tal; markören skall placeras i "weight" inputet. Detta så att användaren enkelt kan rätta vikten.

## Facit
