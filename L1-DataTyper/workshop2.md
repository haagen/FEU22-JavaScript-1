# Workshop 2

Strängar och sträng-metoder.

Referens kan hittas här på [W3Schools](https://www.w3schools.com/js/js_string_methods.asp).

1. Skapa en ny boiler plate
2. Skapa en kod som:

   1. tilldelar variablen s1 strängen "Mitt namn är <ditt namn>"
   2. med hjälp av strängen s1 - tilldelar den nya strängen s2 samma värde fast med ett utropstecken på slutet (2 olika sätt)
   3. skriver ut längden av båda strängarna till skärmen
   4. skapa två variabler; s3 med innehållet "Jag gillar", s4 med innehållet "JavaScript".
   5. med hjälp av concat, s3 och s4 - skriv ut "Jag gillar JavaScript!"
   6. med hjälp av concat, padEnd och s3 - skriv ut "Jag gillar glass!!!!!!!!" (24 tecken totalt)
   7. tilldela resulatet av (6) till en ny variabel - använd replace för att skriva "Jag gillar soligt väder!!!!!!!!"
   8. du har strängen "Äpplen,Bananer,Mandariner", med hjälp av slice, lastIndexOf skapa strängen "Äpplen,Bananer"
   9. du har strängen "Äpplen,Bananer,Mandariner", med hjälp av slice, lastIndexOf skapa strängen "Mandariner"
   10. du har strängen "Äpplen,Bananer,Mandariner", med hjälp av slice, lastIndexOf, indexOf skapa strängen "Bananer"

3. Bonus! (Tills nästa gång)
   1. Tilldela en ny variabel (template) värdet "Hej Martin," (du kan så klart använda ditt egent namn).
   2. Använd indexOf() för att hitta " " och "," i template - tilldela dem till variabler
   3. Använd slice() för att hämta ut namnet med hjälp av variablerna i 3.
   4. Använd alert() för att skriv "Du heter Martin!"

## Facit

console.log('--Workshop--');

// 1
let s1 = "Marcus Therup";
console.log(s1);

// 2
let s2 = s1 + "!";
s2 = s1.concat("!");
console.log(s2);

// 3
console.log(s1.length);
console.log(s2.length);

// 4 & 5
s3 = "Jag gillar";
s4 ="JavaScript";
console.log(s3.concat(" " + s4 + "!"));
let s5=s3
.concat(" ")
.concat(s4)
.concat("!");
console.log(s5);

// 6
let s6 = (s3.concat (" glass" ).padEnd(24,"!"));
console.log(s6);

// 7
console.log(s6.replace (" glass", " soligt väder"));

// 8, 9 och 10
let s7 = "Äpplen,Bananer,Mandariner";
startPos=s7.undefined;
endPos=s7.lastIndexOf(",");
console.log(s7.slice(startPos,endPos));
console.log(s7.slice(0,s7.lastIndexOf(',')));

console.log(s7.slice(s7.lastIndexOf(",") + 1));
console.log(s7.slice(s7.lastIndexOf(",") + 1, s7.length));
console.log(s7.slice(s7.indexOf(",") + 1, s7.lastIndexOf(",")));

// Bonus

let template="Hej Martin,";
let space = template.indexOf(" ");
let komma = template.indexOf(",");
let namn = template.slice(space+1,komma);
alert(namn);
