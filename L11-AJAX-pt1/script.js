/*
 * Synchronous
 */

/*
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.chucknorris.io/jokes/random', false); // Configures request - set as synchronous
xhr.send();     // Since we are non async - this will block

console.log('Status: ' + xhr.status);
console.log('Status Text: ' + xhr.statusText);
console.log('Response: ' + xhr.response); //xhr.responseText

*/

/*
 * Async

{"categories":[],"created_at":"2020-01-05 13:42:24.142371","icon_url":"https://assets.chucknorris.host/img/avatar/chuck-norris.png","id":"nDKcohC8TqyN3ifdi0lNxQ","updated_at":"2020-01-05 13:42:24.142371","url":"https://api.chucknorris.io/jokes/nDKcohC8TqyN3ifdi0lNxQ","value":"No one truly knows who's Chuck Norris' real father. No one is biologically strong enough for this. He must've conceived himself."}

*/

let xhr = new XMLHttpRequest();
let url = 'https://api.chucknorris.io/jokes/random';
xhr.open('GET', url, true); // Set to an async connection
xhr.responseType = 'json';
xhr.send(); // This will not block

// This will be done directly after the send()
console.log('Status: ' + xhr.status);
console.log('Status Text: ' + xhr.statusText);
console.log('Response: ' + xhr.response); //xhr.responseText

/*
function myAjaxCallback(event) {
    console.log('CB Status: ' + this.status);   // this === object that runs the callback - in this case the xhr
    console.log('CB Status Text: ' + this.statusText);
    console.log('CB Response: ' + this.response); //xhr.responseText
}
xhr.addEventListener('load', myAjaxCallback);
xhr.onload = myAjaxCallback;
*/

xhr.addEventListener('load', (event) => {
    console.log('CB Status: ' + xhr.status);   // this === object that runs the callback - in this case the xhr
    console.log('CB Status Text: ' + xhr.statusText);
    console.log(xhr.response)
    console.log('CB Response (value): ' + xhr.response.value); //xhr.responseText
});


//responseType - "", "text", "arrayBuffer", "blob", "document", "json"