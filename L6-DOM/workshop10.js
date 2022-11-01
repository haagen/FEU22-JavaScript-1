

function onClickHandler() {
    //alert('Hello World!');

    //let nameInput = document.getElementById('name');
    //alert('Hunden heter: ' + nameInput.value);

    let nodLista = document.querySelectorAll('#weight');
    let viktInput = nodLista[0];
    let vikt = viktInput.value;
    console.log(vikt);

    let span = document.getElementById('status');
    console.log(span);

    if(isNaN(vikt)) {
        // Ogiltigt nummer
        span.textContent = 'Invalid number (Weight)';
        span.className = 'failure';
        viktInput.focus();
    } else {
        // Giltigt nummer
        span.innerHTML = 'Thanks for participating';
        span.className = 'success';
    }

}