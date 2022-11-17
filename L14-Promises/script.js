/*
    Repetition
*/

let myArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// Ny array som innerhålla jämnatal, 2, 4, 6 ...
function isEven(e, i, a) {  // element, index, array
    // e % 2 == 0  -- om mod ger 0 så är det ett jämnt tal (ingen rest)
    // e % 2 != 0  -- ger resten om - dvs inte jämnt
    if (e % 2 == 0) {
        return true;
    }
    return false;

    //return e % 2 == 0 ? true : false;  // This is the same as the if-statement above

    //return e % 2 == 0;    // this is an even shorter way of doing the same thing 
}

let evenNumbers = myArray.filter(isEven); // Run filter and use isEven() as the filtering method
console.log(evenNumbers);

let oddNumbers = myArray.filter(function(e, i, a) { // Run filter and use anonymouns function as the filtering method
    return e % 2 != 0;
});
console.log(oddNumbers);

oddNumbers = myArray.filter(e => e % 2 != 0); // (e) => { return e % 2 != 0; }
console.log(oddNumbers);

/*
    Promises
*/

function myAsyncFunction(resolve, reject) { // We expect that these are "callbacks" or functions references
    console.log('In myAsyncFunction');
    setTimeout(() => {
        resolve('Done!');
    }, 4000);   // Wait for 4s
}
/*
let myPromise = new Promise(myAsyncFunction);
myPromise
    .then((message) => {
        console.log('In then(): ' + message);
        return new Promise(myAsyncFunction);
    })
    .then((message) => {
        console.log('In then(): ' + message);
        return new Promise(myAsyncFunction);
    })
    .then((message) => {
        console.log('In then(): ' + message);
        return new Promise(myAsyncFunction);
    })
    .then((message) => {
        console.log('In then(): ' + message);
        return new Promise(myAsyncFunction);
    })            
    .then((message) => {
        console.log('In then(): ' + message);
    });
*/

/*

// Exempel med callback-hell

setTimeout(() => {
    console.log('Done 1!');
    setTimeout(() => {
        console.log('Done 2!');
        setTimeout(() => {
            console.log('Done 3!');
            setTimeout(() => {
                console.log('Done 4!');
                setTimeout(() => {
                    console.log('Gå på rast!');
                }, 4000);   // Wait for 4s
            }, 4000);   // Wait for 4s
        }, 4000);   // Wait for 4s
    }, 4000);   // Wait for 4s
}, 4000);   // Wait for 4s
*/

/*
    Async & Await
*/

function myPromiseFunction() {
    return new Promise(myAsyncFunction);
}

async function myAsyncDecoratedFunction() {
    console.log('Hello World!');
    let myPromise = myPromiseFunction();
    let response = await myPromise;
    console.log(response);

    response = await new Promise(myAsyncFunction);
    console.log(response);
    response = await new Promise(myAsyncFunction);
    console.log(response);
    response = await new Promise(myAsyncFunction);
    console.log(response);
    response = await new Promise(myAsyncFunction);
    console.log(response);        
    
    return 'Hello';
}
myAsyncDecoratedFunction()
    .then((thisIsWhatmyAsyncDecoratedFunctionReturns) => {
        console.log(thisIsWhatmyAsyncDecoratedFunctionReturns);
        console.log('All Done!');
    });


