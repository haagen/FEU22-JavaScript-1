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


/* 
 * Workshop 17 - Facit
 */


// Sync
function myCallback(message) {
    console.log('In myCallback: ' + message);
}

function myFunction(callback, theText) {
    callback(theText);
}

myFunction(myCallback, 'Min valfria text!');


// Async
function countDownTimer(numberOfSeconds, callback1) {
    for(let i=0;i<=numberOfSeconds;i++) {
        setTimeout(() => {
            if(i == numberOfSeconds) {
                console.log("GO!");
                callback1();
            } else {
                console.log(numberOfSeconds - i);
            }
        }, i*1000);
    }
}

countDownTimer(5, () => { console.log('The cat is out of the hat!'); });