# Workshop 13

Arrayer deep-dive.

1. Skapa en array som innehåller fem strängar:
   `Banan, Apelsin, Morot, Äpple, Melon`
2. Skriv en rad kod som hittar vilket index "Äpple" finns på
3. Skriv en rad kod som skapar en ny array som innehåller dem tre värdena i mitten (Apelsin, Morot, Äpple).
4. Skriv en funktion som tar två parametrar, en array (ary) och en sträng (search). I funktionen: leta upp vilket index "search" har i "ary". Om den hittar en position skall den radera värdet ifrån ary. Testa funktionen och ge den argumentet "Morot" - du skall då få en array ut som innehåller Banan, Apelsin, Äpple, Melon.
5. Sortera din array i omvänd bokstavsordning.
6. Skapa en funktion, createPokemon, som returnerar ett objekt - tre attribut (name, hp, stage) - dessa kommer in i metoden som parametrar.
7. Skapa (med hjälp av funktionen i 6) en array bestående av 6 Pokemons.
8. Skapa en funktion, sortPokemonAlpha, som tar två pokemon objekt som parametrar (a och b). Funktionen skall returnera -1 om _b_ kommer innan _a_ i alfabetet genom att jämföra deras namn, 0 om dem kommer på samma plats och 1 om _a_ kommer före _b_.
9. Sortera din lista av Pokemon - använd sortPokemonAlpha funktionen som din callback till sort.
10. Skapa en funktion som tar en Pokemon som parameter och returnerar dess namn.
11. Skapa en funktion som tar en Pokemon som parameter och returnerar dess hp.
12. Skapa en funktion som tar en Pokemon som parameter och ruturnerar sant om dess hp är högre än 100.
13. Skapa en ny array som innehåller alla Pokemon från din första lista men som hp högre än 100. (Använd **filter()** och funktionen du skapade i 12)
14. Skapa en ny array som innehåller namnen på alla Pokemons som har hp högre än 100 (resultatet från 13, **map()** och funktionen från 10)

## Facit
