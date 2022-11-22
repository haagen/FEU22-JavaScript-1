# Workshop / Övning 19

Denna övning har två mål:

1. Arbeta med jQuery och Ajax för att få en känsla för det fungerar
2. Arbeta lite med [SWAPI](https://swapi.dev/api/) för att lära dig lite om hur det fungerar

# Delövning 1

Här skall vi skriva en kod som hämtar ut informationen om Jabba De Hut från SWAPI - vad är hans riktiga namn? I denna övningen skall du använda jQuery.

1. Skapa en ny stubb för övningen.
2. Skapa HTML-markup för att användaren skall kunna

   - ange ett id (en text input)
   - trycka på en sök-knapp
   - en span/div för att skriva ett resultat

3. Ladda jQuery biblioteket i din HTML
4. I ditt Javascript:

   - vänta på att DOM:en har laddat klart (document ready)
   - skapa en event-listener för knappen ( "on" "click" )

5. När användaren trycker på kappen

   - Hämta värdet i text-input:en (från #2)
   - Använd värdet för att hämta data från SWAPI - anta att värdet är ett id för en person och du behöver därför bygga en adress som ser ut ungefär så här: https://swapi.dev/api/people/&lt;värde&gt;

6. Skriv ut

   - namn
   - kön
   - födelseår
   - ögonfärg

   för personen du hämtade data för i din resultat-tag (från #2)

7. Kolla vad Jabba de Hut heter på riktigt - den har id 16.

# Delövning 2

Nu skall vi validera användarens inmatningar med hjälp av ett jQuery-plugin som heter [jQuery Validation Plugin](https://cdn.jsdelivr.net/npm/jquery-validation@1.19.5/dist/jquery.validate.js). Vi skall säkerställa att användaren matar in ett tal i inputen (#1.2) och inte en text. 

1. Gå till [dokumentationen](https://jqueryvalidation.org/documentation/) för pluginet och studera den.
2. Länka in pluginet i din html (efter taggen du laddar jQuery med). D
3. Se till att dina input element finns i en FORM-tag i din HTML - formen behöver också ett id (validation reglerna ligger på formen). 
4. Skapa en "validate()" för din form.

   - ditt fält skall vara tvingade ("required")
   - ditt fält skall vara endast siffror ("digits")
   - tips: du måste göra detta innan användaren använder din form - dvs så fort formen är laddad. 

5. Eftersom du har en form kommer den nu att göra en submit och sidan kommer att laddas om. Du kan stoppa detta genom att hindra "event-kedjan" från att fortgå. I din handler för knappen; 

   - Lägg till en parameter "event" till din event handler för knapptryckningen.
   - Anropa event.preventDefault() för att stoppa event kedjan. Detta stoppar den inbggda event-hanteraren för formulär att köras och sidan kommer inte att laddas om. 

6. Uppdatera din kod som hanterar knappen (från #1.5) - du skall nu kontrollera att formen är ok innan du skickar din fråga till SWAPI. Du kan använda metoden som heter valid() för detta. 

