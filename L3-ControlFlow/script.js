/***************************
 * 0. Repetition
 ***************************/
 console.log('--> 0. Repetition <--');

 // Array (lista) - sorterad 
 // lista: a, c, d, e 
 // post:  0, 1, 2, 3 (index)
 let a0 = []; 
 a0 = ['a', 'c', 'd', 'e'];
 console.log(a0[0]); // a
 console.log(a0[2]); // d
 let n0 = 2;
 console.log(a0[n0]); // d

// if - förgrening 
// if(uttryck) 
//  om-sant-kod
// else 
//  annars-kod;
if (true)
    console.log('Sant är alltid sant!')
else
    console.log('Sant är aldrig falskt!');

if (n0 > 1)
    console.log('n0 är större än 1');

let b0 = n0 > 1;
if (b0)
    console.log('n0 är större än 1');


// for-loop
// for(initierar, uttryck, räknare) {}
for (
    let i=0;        // Initierare
    i < 10;         // Uttrycket - ny itteration (körningar av loopen) startas så länge detta är sant
    i++
) {
    console.log(i);
}

 
/***************************
 * 1. Jämförelser
 ***************************/
console.log('--> 1. Jämförelser <--');

// = (tilldelning)
let n1 = 1; 
let s1 = "1"; 

// == (jämförels - abstract)
console.log(`s1 == n1: ${s1 == n1}`);
console.log(`s1 != n1: ${s1 != n1}`);

// === (strict jämförelse)
console.log(`s1 === n1: ${s1 === n1}`);
console.log(`s1 !== n1: ${s1 !== n1}`);
console.log(`n1 === 1: ${n1 === 1}`);
console.log(`s1 === "1": ${s1 === s1}`);

// Relativa jämförelser, >, <, >=, <= 

// ! true -> false alt. false -> true

/***************************
 * 2. Scope
 ***************************/
 console.log('--> 2. Scope <--');

{
    let n2 = 5;
    console.log(n2);
}
 //console.log(n2);

let s2='Hello World!';
{
    console.log(s2);
}

{
    var s2_2 = 'Global Variabel!'; // Tillgänglig i alla scope -- inte fel - men undvik
}
console.log(s2_2);


/***************************
 * 3. While, Do-While
 ***************************/
 console.log('--> 3. While, Do-While <--');
/*
 while(uttryck) {

 }
 */
let n3=0;
 while(n3<10) {
    // Beräkna n3 
    console.log(n3);
    n3 = n3 + 1; // n3++;
 }

/*
 do {

 } while(uttryck);
 */

 n3=-2000;
 do {
    console.log(n3);
    n3 = n3 - 1; // n3--;
 } while(n3 >= 0);

 let s3="";
 while(s3 != "111") {
    s3 = s3 + "1";
 }
 console.log(s3);

 // Tips - var försiktig så att du inte hamnar i en oändlig loop

/***************************
 * 4. Switch
 ***************************/
 console.log('--> 4. Switch <--');

 let n4 = 3;
 if (n4==1) {
    console.log('Ett');
 }
 if (n4==2) {
    console.log('Två');
 }
 if(n4==3) {
    console.log('Banan');
 }
 if(n4==4) {
    console.log('Banan');
 }
 if(n4==5) {
    console.log('Fem');
 }

 /*
    switch(variabel) {
        case X: 
            uttryck;
            break;
        case Y:

            break;
        default:
    }
 */

n4=10;
switch(n4) {
    case 1:
        console.log('Ett');
        break;
    case 2:
        console.log('Två');
        break;   
    case 5:
        console.log('Fem');
        break;      
    case 3:
    case 4:
        console.log('Banan');
        break;
    default:
        console.log('default');
}


let pris=0; // Priset
let produkt='Melon'; 
switch(produkt) {
    case 'Äpple':
        pris=10;
        break;
    case 'Päron':
    case 'Banan':
        pris=5;
        break;
    default:
        pris=100;
}
console.log(`${produkt} kostar ${pris}`);

/***************************
 * 5. Maths
 ***************************/
 console.log('--> 5. Maths <--');

 let tal = 123.456789;
 console.log(tal);  //console.log(tal.toString());

 //toFixed(hur många decimaler)
 console.log(tal.toFixed(2));
 console.log(tal.toFixed(4));
 console.log(tal.toExponential(2)); // 1.23 * 10^2

 let röd = 255;  //'FF0000'
 console.log(röd.toString(16).toUpperCase());  // 16 bas i Hexadecimalt dvs 0 - F (0-255)
 let binärt = 12;
 console.log(binärt.toString(2).padStart(8,'0')); // 2 bas i binärt dvs (0 eller 1)

 // Math 
 // Triangel: 
 let bas=5;
 let höjden=5;
 // hypotenusan^2 = bas^2 + höjden^2
 //let hypotenusan = Math.sqrt(bas*bas + höjden*höjden);
 let hypotenusan = Math.sqrt(Math.pow(bas,2) + Math.pow(höjden,2));
 console.log(`Hypotenusan är ${hypotenusan.toFixed(0)} cm`);

 console.log(`Math.pow(10,2) = ${Math.pow(10,2)}`); // 10^2
 
 const PI = 3.14; // Math.PI istället
 console.log(Math.PI);

 // Math.random() 

 console.log(`Math.random() = ${Math.random()}`);

 /***************************
 * 6. Tärning
 ***************************/
  console.log('--> 6. Tärning <--');

  let sidor = 6;
  let minstaTal = 1
  let högstaTal = sidor;  // Tärning 1 - 6

  let tärningsKast = minstaTal + Math.floor(Math.random()*(högstaTal-minstaTal+1));
  console.log(`Täningskast = ${tärningsKast}`);


let sexSidigTärning = Math.floor(Math.random()*6) + 1;
console.log(sexSidigTärning);

