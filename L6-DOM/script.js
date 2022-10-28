

function clickHandler() {
    //alert('You Clicked Me!');
    const input = document.getElementById("userName");
    //console.log(input);
    //alert(`Hej ${input.value}! Välkommen till min sida!`);
    const span = document.getElementsByClassName("important")[0];
    console.log(span);
    console.log("Antal strong: " + document.getElementsByTagName('strong').length);
    span.innerHTML = `Hej <strong>${input.value}</strong>! Välkommen till min sida!<br/>`;
    console.log("Antal strong: " + document.getElementsByTagName('strong').length);
}

let counter=1;
function clickHandler2() {
    let span = document.getElementById("discoLight");
    //console.log(span);
    span.className = "color"+counter;
    counter++;
    if(counter>5) counter=1;
}


function clickHandler3() {
    clickHandler2();
    setTimeout(clickHandler3, 100);
}