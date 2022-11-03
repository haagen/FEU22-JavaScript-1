// Event handler for click on the button
function createImageClick() {
    console.log('In createImageClick()');
    let result = document.querySelector('#result'); // Fetch the result div from the DOM
    if(result.innerHTML == '') { // Check if the div is empty
    //if(result.children.length === 0) {
        let img = document.createElement('img'); // Create a new IMG-tag
        img.src = 'https://z3d9h8m9.stackpathcdn.com/wp-content/uploads/2020/11/ec-logo-mono2.svg';
        // img.setAttribute('src', 'https://z3d9h8m9.stackpathcdn.com/wp-content/uploads/2020/11/ec-logo-mono2.svg');
        result.append(img); // Add the image to the result div 
    } else {
        result.innerHTML = ''; // Empty the div
    }
}

function init() {
    console.log('In init()');
    let btn = document.getElementById("createImage"); // Fetch button from the DOM
    btn.addEventListener('click', createImageClick);   // Add event listner to button
}
init(); // Run automatically on load