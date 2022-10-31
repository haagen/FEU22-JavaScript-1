# Extra uppgifter 1

Frivilliga extra övningsuppgifter. 

## Listor / Array:er

```
let myArray = ['Röd', 'Grön', 'Blå'];
```

1. Skriv ut det första elementet i listan till konsollen.

2. Skriv ut det sista elementet i listan till konsollen.

3. Lägg till färgerna Lila, Orange, Rosa till slutet av listan. Skriv ut resultatet i konsollen. 


## Loopar

4. Skapa en for loop som går igenom listan. Den skall kopiera alla färger som inte innehåller bokstaven ö till en ny lista. Skriv ut den nya listan i konsollen.


5. Skapa en for loop som går igenom listan. Den skall kopiera värden till en ny lista i omvänd ordning. Dvs Rosa, Orange, ...  Skriv ut resultatet i konsollen.

## Funktioner

6. Skapa en funktion som tar en array som parameter. Funktionen skall med hjälp av svaret från uppgift 5 returnera en array i omvänd ordning. Skriva ut svaret från funktionen i konsollen när du ger den myArray som parameter.

7. Skapa en funktion som 
    a) tar en parameter som innehåller en lista
    b) med hjälp av en while-loop går igenom listan och lägger i hop alla värdena till en lång sträng.
    Skriv ut resultatet av funktionen till konsollen om du ger den myArray som parameter.


## Facit

```

// 1
console.log(myArray[0]);

// 2
console.log(myArray[2]);
console.log(myArray[myArray.length-1]);

// 3
myArray[myArray.length] = 'Lila';
myArray[myArray.length] = 'Orange';
myArray[myArray.length] = 'Rosa';
console.log(myArray);

// 4
let newArray = [];
for(let i=0;i<myArray.length;i++) {
    let color = myArray[i];
    if (!color.includes('ö')) { // ! means not e.g. true -> false, false -> true
        newArray[newArray.length] = color;
    }
}
console.log(newArray);

// 5
newArray = [];
for(let i=myArray.length;i>0;i--) {
    newArray[newArray.length] = myArray[i-1];
}
console.log(newArray);

// 6
function myReverseArray(theList) {
    let result = [];
    for(let i=theList.length;i>0;i--) {
        result[result.length] = theList[i-1];
    }    
    return result;
}
console.log(myReverseArray(myArray));

// 7
function myJoinArray(theList) {
    let result = '';
    let i=0;
    while(i<theList.length) {
        result += theList[i];
        i++;
    }
    return result;
}
console.log(myJoinArray(myArray));

```