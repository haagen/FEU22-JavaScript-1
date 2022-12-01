//
// Deluppgift 1
//
const btn = document.getElementById('btn');                 // Fetch the button from the DOM
btn.addEventListener('click', () => {                       // Create event listener for the button
    //alert('Hello World!');

    try {                                                   // #2
        let dogName = getDogName();                         // #2 Get the name of the dog
    } catch (err) {                                         // #2 Catch the exception
        console.log(`${err.dogName} : ${err.message}`);     // #2 Print the custom attribute (dogName) and the error message
    }

    let dogWeight = getDogWeight();                         // Get the dog weight and validate it
    if (dogWeight instanceof Error) {                       // Check if we got an error
        console.error(dogWeight.message);                   // We did get an error - print it to the console
        return;
    } 
    alert(`Hunden väger: ${dogWeight} kg`);                 // We did not get an error - alert the result
});

function getDogWeight() {
    const weight = document.getElementById('weight');       // Fetch weight input from the DOM
    const dogWeight = weight.value;                         // Get the value from the input

    if (dogWeight.length == 0) {                            // Check if the length of the value is bigger than 0
        return new Error('Du måste ange en vikt för hunden!');  // It wasn't, return an error
    }
    if(isNaN(dogWeight)){                                   // Check if the value is a number
        return new Error('Hundens vikt måste vara ett nummer / tal'); // It wasn't, return an error
    }
    return parseInt(dogWeight);                             // The dog was formatted correctly - return the weight as a number (not a string)
}


//
// Deluppgift 2
//
function getDogName() {
    const dogName = document.getElementById('name').value;

    const trimmedDogName = dogName.trim();                  // Remove spaces in the beginning and end of the string
    if(trimmedDogName.indexOf(' ') >= 0) {                  // Check if there still is spaces - that would mean multiple words
        const err = new Error('Hundens namn får bara ha ett ord!'); // Create an error with a message
        err.dogName = trimmedDogName;                       // Pass the dog name as a custom attribute on the Error object
        throw err;                                          // Throw the exception
    }
    return trimmedDogName;                                  // Return the validate dog name 
}


// Deluppgift 3

let xhr = new XMLHttpRequest();  // Create an XMLHttpRequest object
xhr.open('GET', 'http://www.boredapiM.com/api/activity/', true); // Configure the request
xhr.addEventListener('load', () => {
    console.log('xhr.load event');
});   // Add an eventlistener with a callback to the onLoad
//xhr.responseType = 'json';  // BONUS -- if this is done we should not do JSON.parse on line 5
xhr.addEventListener('error', (event) => { 
    myErrorHandler(event); 
});
xhr.send();

function myErrorHandler(event) {
    console.log(event);
}