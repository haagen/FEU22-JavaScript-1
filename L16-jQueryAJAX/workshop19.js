
$(document).ready((event) => {
    $('#search').on('click', (event) => {
        event.preventDefault();
        console.log('Hello World:' + $('#id').val());
        if($('#myForm').valid()) {
            getPersonFromSWAPI($('#id').val());
        }
    });
});

async function getPersonFromSWAPI(personId) {
    let person = await $.get(
        'https://swapi.dev/api/people/' + personId
    );
    console.log(person);

    let myPersonHTML = `
        <strong>Name:</strong> ${person.name}<br/>
        <strong>Gender:</strong> ${person.gender}<br/>
        <strong>Birth Year:</strong> ${person.birth_year}<br/>
        <strong>Eye color:</strong> ${person.eye_color}<br/>
    `;

    $('#result').html(myPersonHTML);
}

$('#myForm').validate({
    rules: {
        id: {
            required: true, 
            digits: true
        }
    }
});