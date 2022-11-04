
const alert = document.getElementsByClassName('alert')[0];            // We create a global variable that contains the alert tag from the DOM

function init() {
    console.log('In init()');

    const btnAsk = document.querySelector('#btnAsk');                   // Fetch btnAsk from the DOM
    btnAsk.addEventListener('click', () => {                            // Add eventlistener to the btnAsk
        console.log('btnAsk was clicked');
        const product = document.querySelector('#product');             // Fetch the product (select) tag from the dom
        let price = product.value == 'Premium' ? 1000 : 500;            // Calculates the precis of the product using a ternary operator
        setAlert(`The ${product.value} product costs <strong>${price}</strong>`);        // Messages the user with the price 
    });

    alert.addEventListener('click', function(){                         // Add eventlistener to the alert div 
        console.log('alert was clicked');
        alert.classList.add('d-none');                                  // Hide alert by adding the d-none class to the element
    });
    
}

function setAlert(text) {
    //let alert = document.getElementsByClassName('alert')[0];            // Fetch alert from the DOM (getElementsByClassName retuns a collection and we use the first item) - we commented this because we made a global constant instead
    alert.innerHTML = text;                                             // Set the innerHTML to the text
    //alert.textContent = text;
    alert.classList.remove('d-none');                                   // Remove the class d-none from the alert nodes classes (classList is a collection / list)
    setTimeout(function(){                                              // Create a time - that will run after 10s (10000 ms)
        alert.classList.add('d-none');                                  // Will run this code - add the d-none class to the alert element
    }, 10000);    
}

init();                                                                 // Starts automatic on script load