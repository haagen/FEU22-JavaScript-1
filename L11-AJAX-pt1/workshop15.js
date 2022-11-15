
// Create a callback
function onLoad() {
    if(xhr.status == 200) {     // API returns 200 if request was okay
        let responseObj = JSON.parse(xhr.response); // Response is a text-string containing a JSON-structure. Convert it to JavaScript object
        console.log('Why not do: ' + responseObj.activity);
        //console.log('Why not do: ' + xhr.response.activity);    // BONUS  -- if this is done we should not do JSON.parse on line 5
    } else {
        console.log('My request failed: ' + xhr.statusText);
    }
}

let xhr = new XMLHttpRequest();  // Create an XMLHttpRequest object
xhr.open('GET', 'http://www.boredapi.com/api/activity/', true); // Configure the request
xhr.addEventListener('load', onLoad);   // Add an eventlistener with a callback to the onLoad
//xhr.responseType = 'json';  // BONUS -- if this is done we should not do JSON.parse on line 5
xhr.send();
