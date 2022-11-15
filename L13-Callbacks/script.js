/*
let myString = 'Martin';

console.log('Först händer detta!');
console.log('Sen detta');

function enFunktion() {
    console.log('Detta körs när funktionen anropas');
}

console.log('Och detta');
enFunktion();
*/

console.log('Först händer detta!');
console.log('Sen detta');

setTimeout(() => {
    console.log('Detta körs någongång i framtiden!');
}, 2500);

console.log('Och detta');
console.log('Men detta skall inte köras sist!');
