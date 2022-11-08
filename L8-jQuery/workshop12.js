

function createImageClick() {
    console.log('In createImageClick()');

    let newTag = $('<img src="https://z3d9h8m9.stackpathcdn.com/wp-content/uploads/2020/11/ec-logo-mono2.svg" alt="My Picture">');
    if(!$('#result').html()) {   // If result contains anything == true
        $('#result').append(newTag);    // Add the image
    } else {
        $('#result').html('');
    }
}

function init() {
    console.log('In init()');
    $('#createImage').on('click', createImageClick);    // Add event handler
}



$(document).ready(init);    // init will run when DOM is loaded - init is a "callback"
