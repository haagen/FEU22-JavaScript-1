/*****************************************
 * 1. Kommentarer
 *****************************************/
console.log('>> 1. Kommentarer <<');
// En-rads-kommentar 
console.log('Till console:en');  // Skriv till konsollen
/* 
 en kommentar på
 flera rader
*/


/*****************************************
 * 2. Template-strängar
 *****************************************/
console.log('>> 2. Template-strängar <<');

const myName='Martin Haagen';
let s1=`Hejsan ${myName}`; // ${} är ett uttryck - kommer att exekveras och resultatet kommer att skrivas ut
console.log(s1);
//s1='1+1='+(1+1);
s1=`1+1=${1+1}`;  
console.log(s1);

// I template-strängar kan vi ha radbrytningar
s1=`Rad 1
Rad 2
`;
console.log(s1);

/*****************************************
 * 3. Numerisk datatyp
 *****************************************/
console.log('>> 3. Numerisk datatyp <<');

let n=1;

n = 1 + 1.1;
console.log(n);

n=0;
while(true) {
    n = n + 0.1; // 0.1, 0.2, 0.3
    if(n > 0.3) break;  // Sluta när n = 0.3
    ///if(n > 10) break;
}
console.log(`Stannade vid ${n}`);
console.log(`Epsilon = ${Number.EPSILON}`);
console.log(`Max Safe Integer = ${Number.MAX_SAFE_INTEGER}`);

// Tilldela ett tal
n=1;
// Öka ett tal med 1
n=n+1;
n+=1;
console.log(n); // 3

n++;
console.log(n); // 4
n-=1;
n--;
console.log(n); // 2

n*=2; // (n=2) 2*2 = 4
console.log(n);

/*****************************************
 * 4. Datatyps konverteringar 
 *****************************************/
console.log('>> 4. Datatyps konverteringar <<');

let s4="0.3";
console.log(s4);
s4 += 1;  // concat  "0.3" + "1" = "0.31"
console.log(s4);

let n4 = Number(s4); // Konvertera sträng -> tal n4 = 0.31
console.log(n4);
n4 += 1;    // 0.31 + 1 = 1.31
console.log(n4);

n4 = Number('Martin');
console.log(n4);
console.log(isNaN(n4));

n4 = parseInt('5 Myror');
console.log(n4);
n4 = parseInt('Myror');
console.log(n4);
n4 = parseInt('5.4 Myror'); // 5
console.log(n4);
n4 = parseFloat('1.75 Myror'); // 1.75
console.log(n4);

let SANT = true; // true eller ett tal != 0
let FALSKT = false; // false eller talet 0

s4 = "5.4 Myror";
s4 = parseFloat(s4).toString() + 0.1; // parseFloat 5.4, toString "5.4", "5.4" + 0.1 = "5.40.1"
console.log(s4);

/*****************************************
 * 5. NULL (och UNDEFINED)
 *****************************************/
console.log('>> 5. NULL (och UNDEFINED) <<');

let s5; 
console.log(s5 == null);  // om s5 == null "sant" 
console.log(s5 == undefined);
s5="Martin";
console.log(s5 == null);  
console.log(s5 == undefined);
s5=null;
console.log(s5 == null);  
console.log(s5 == undefined);
console.log(undefined == null);
console.log(undefined === null);

/*****************************************
 * 6. Arrayer (uppställning / lista)
 *****************************************/
 console.log('>> 6. Arrayer (uppställning / lista) <<');

 let a6 = [1, 2, 3];
 console.log(a6);
 a6 = [1, true, 'Sträng'];
 console.log(a6);
 a6 = [1, true, "Sträng", [5, 4, 3, 2, 1] ];
 console.log(a6[2]);
 
 a6[0]=a6[0]+1;
 console.log(a6);

/*****************************************
 * 7. Kontrollflöden - if
 *****************************************/
 console.log('>> 7. Kontrollflöden - if <<');
/*

if(expression)
    om-sant-kod;

if(expression)
    om-sant-kod
else
    annars-kod;

*/

let expression = false;
if(expression) 
    console.log('Expression var "sant"!'); 

if(expression)
    console.log('Expression var "sant"!')
else 
    console.log('Expression var "falskt"!');

n = 10;
if(n>5)
    console.log(`N=${n}`);

expression=false;
n=1; 
/*
if(expression)
    if(n>5)
        console.log('N större än 5');
else 
    console.log('Vi hamnade i else!');
*/

{
    console.log('1');
    console.log('2');
}
if(expression) {
    console.log('1');
    console.log('2');
} else {
    console.log('3');
    console.log('4');    
}

/*****************************************
 * 8. Kontrollflöden - for
 *****************************************/
 console.log('>> 8. Kontrollflöden - for <<');

 /*
    for(initsierar; vilkor; slutgiltigt utryck (räknar))
        uttryck; {}
 */

for(let counter=0; counter < 10; counter++) {
    console.log(counter);
}

for(let counter=0; counter<10;) {
    console.log(counter);
    counter+=1;
}

//let a8 = [1, 2, 3, 4, 5];
let a8 = [1, 4, 6, 2, 6]; 
let sum = 0;
for(let i=0; i<a8.length; i++ ) { // lenght = 5
    sum += a8[i];
}
console.log(`Summan är ${sum}`);

// [ 1 ] [ 4 ] [ 6 ] [ 2 ] [ 6 ]  - Värdena
//   0     1     2     3     4    - Position (i)

// Hur vet jag att när ett jämt tal? 
// n%2 == 0 
// Udda 
// n%2 == 1
