
/*
let xhr = new XMLHttpRequest(); // Create new object
xhr.open('GET', 'https://api.chucknorris.io/jokes/random', false); // Configure object
xhr.send(); // Send the request to the servet and block until response arrives

console.log(xhr.status);
if (xhr.status == 200) {        // Status 200 means OK in the HTTP-protocol
    console.log('Our request worked fine!');
    console.log(xhr.response);
}
*/

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true); // Use async connection
xhr.send(); // Send the request but do NOT block         ---^

/*
xhr.onload = function() {   // Will be called when the data has been loaded
    console.log('CB ' + xhr.status);
    if (xhr.status == 200) {        // Status 200 means OK in the HTTP-protocol
        console.log('CB ' + 'Our request worked fine!');
        console.log('CB ' + xhr.response);
    }
}
*/

/*
xhr.addEventListener('load', () => {
    console.log('CB ' + xhr.status);
    if (xhr.status == 200) {        // Status 200 means OK in the HTTP-protocol
        console.log('CB ' + 'Our request worked fine!');
        console.log('CB ' + xhr.response);
    }    
});

console.log(xhr.status);
if (xhr.status == 200) {        // Status 200 means OK in the HTTP-protocol
    console.log('Our request worked fine!');
    console.log(xhr.response);
}
*/


// AJAX med fetch
/*
let promise = fetch('https://api.chucknorris.io/jokes/random')      // Call the remote server async - gives promise back.
                .then((response) => {                               // This will be called when the header is recieved from the server / endpoint
                    if(response.ok) {                               // Check if response was OK! 
                        console.log('We got the response (header) from the remote endpoint!');
                        return response.text();                     // This method is also async - will return a promise 
                    }
                })
                .then((data) => {                                   // This will be called when the body is loaded completly and parsed (as text see line 50)
                    console.log(data);                              // Print the response to the console
                });
console.log(promise);
*/

async function callEndpoing() {                                     // Create an async method - only async methods can use the "await" keyword
    console.log('In callEndpoint()');
    let response = await fetch('https://api.chucknorris.io/jokes/random');          // Call the fetch method - use await - the response from the server will show up in response
    console.log('Fetch returned: ' + response.status);
    if (response.ok) {
        console.log('We got the response (header only) from the remote endpoint');
        let json = await response.json();                                           // Call the response.json() method with the await keyword since this is also an async method returening a promise
        console.log(json);
    }
}
callEndpoing();                                                     // Call our async method
console.log('In the end...');