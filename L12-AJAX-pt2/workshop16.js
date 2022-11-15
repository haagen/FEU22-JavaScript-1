
async function fetchData() {
    let response = await fetch('http://www.boredapi.com/api/activity/');    // Configure and call the endpoint
    if(response.ok) {   // Check if call was successful
        let data = await response.json(); // .json(), .text(), .formData(), .blob()...
        console.log('Why not do: ' + data.activity);    // Print result to the console
    } 
}

fetchData();    // This will be called when the page is loaded