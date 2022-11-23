
// Deluppgift #1.1
function myTimer(resolve, reject) {
    setTimeout(() => {
        console.log('In the timeout!');
        resolve("OK");  // This is being sent to the "then" function as the "result"
    }, 5000);
}

// Uppgift #1.2

let myPromise = new Promise(myTimer);
myPromise
    .then((result) => {
        console.log('In then(): ' + result);
        return new Promise(myTimer);    // #1.3 Return the new promise
    })
    .then((result) => { // #1.3
        console.log('In then() 2nd: ' + result);
    });


async function runTimers() {        // # 2.1 This function will return a promise
    console.log('In runTimers()');
    let myPromise = makePromisable(myTimer);
    let reponse = await myPromise;
    console.log(reponse);
    myPromise = makePromisable(myTimer);
    reponse = await myPromise;
    console.log(reponse);
}

function makePromisable(func) {     // # 2.2
    return new Promise(func);
}

runTimers();
