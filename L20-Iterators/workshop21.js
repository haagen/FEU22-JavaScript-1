

// Deluppgift 1 

let fruits = [ 'Banan', 'Kiwi', 'Citron', 'Vindruvor', 'Äpple', 'Päron', 'Plommon', 'Melon', 'Clementint', 'Slanggruka' ];

// # 1.2 
for (let i=0; i<fruits.length;i++) {
    console.log(fruits[i]);
}

// # 1.3
for (let fruit of fruits) {
    console.log(fruit);
}

// # 1.4
for (let i=0;i<fruits.length;i++) {
    //console.log(fruits[fruits.length - 1 - i]);
}
for (let i=fruits.length-1;i>-1;i--) {
    console.log(fruits[i]);
}

// # 1.5
// Om man inte förändrar ursprungs arrayn - kan man inte göra detta eftersom en iterator bara går på ett håll. Framåt!

/*
fruits.reverse();
for(let fruit of fruits) {
    console.log(fruit);
}
*/

// Deluppgift 2

// # 2.2
const ul = document.querySelector('#minLista');
// # 2.3
for(let fruit of fruits) {
    ul.innerHTML += '<li>' + fruit + '</li>';
}
// # 2.4
setTimeout(() => {
    ul.innerHTML = '';
}, 5000);

// Deluppgift 3

async function doPost() {
    const url = 'http://apps.mbh.se:8080/';
    
    const data = {
        message: 'Hello World'
    };
    const dataJSONfromatted = JSON.stringify(data);
    const option = {
        method: "POST",
        body: dataJSONfromatted
    };

    const response = await fetch(url, option);
    const responseData = await response.json();
}

doPost();


// 3.1 
// Den kommer att säga "GET / HTTP/1.1"
// Det kommer inte att finnas någon content-type

// 3.5
// Den kommer att säga "POST / HTTP/1.1"
// Det kommer att finnas en content-type header (eftersom vi nu skicka content I bodyn)