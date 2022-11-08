# Workshop 14

Map och Set

1. Skapa en array med sex pokemons (se [Workshop 13](Workshop13.md) - uppgift 6,7) - ok att kopiera din lösning. Men se till att dina Pokemons har attributet stage och att det finns några av dem som har samma värde.
2. Skapa en samling som innehåller alla stages som dina pokemons har - men varje stage skall bara finnas med en gång i samlingen (unik).
   a) Skapa en funktion
   b) Skapa ett nytt Set i funktionen
   c) I funktionen skall du loopa igenom dina pokemons
   d) För varje pokemon lägg till stage till ditt Set
   e) Skriv ut Set:et till konsollen
3. Du skall sälja dina pokemons och behöver en prislista. Om du använder en Map kan du snabbt få priset för en speciell Pokemon.
   a) Skapa en nya Map
   b) Ge varje Pokemon namn (nyckel) ett pris (värde)
   c) Skriv en kod snutt som tar ut Pokemon på index 2 i din array och skriver ut priset för denna i konsollen.

eHandels-lösning. (Blandade övningar på Array, Set, Map mf)

4. Skapa en select-tag i din html. När ditt script startar skall en init() funktion köras.
5. Skapa en ny funktion som fyller din select med namnen på alla dina pokemons (från uppgift 1).
6. Kör funktionen från 5 i init(). Dina pokemons skall nu synas i select taggen.
7. Skapa en knapp, kalla den Buy, skapa en click-handler till den i init().
8. Skapa en span/div/p-tag med ett id. Taggen kan vara tom.
9. Uppdatera click-handlern - när du trycker på knappen. Skall du skriva ut "&lt;namet på pokemon&gt; kostade &lt;kr&gt;, tack för ditt köp" i din tag i 8.
   a) Hämta ut värdet från selecten (från DOM:en)
   b) Använd din "prislista" (från uppgift 3) för att hitta priset för den valda Pokemon:en.
   c) Skapa en sträng som liknar mallen här över.
   d) Hämta en referens till din tag du skapade i 8.
   e) Uppdatera texten
10. Uppdatera click-handlern - när du trycker på knappen skall din pokemon anses sold. Tabort den från din pokemon-lista och uppdatera select-taggen.
    a) Tabort den köpta Pokemon:en från din lista av pokemons (1) - (indexOf, splice)
    b) Uppdatera select-taggen (kör din metod från 5)
11. **Bonus** Skapa en ny tag - i den skall du skriva ut summan av priset för alla dem köpta Pokemon.

## Facit
