
// Uppgift 2
const rubriken = document.getElementById("rubrik");
console.log(rubriken.textContent);

// Uppgift 3
const paragraphs = document.getElementsByClassName("content");
console.log(paragraphs.length);

// Uppgift 4
const rubrik2 = document.getElementsByTagName("h1");
//console.log(rubrik2);
//alert(rubrik2[0].textContent);
//alert(rubrik2[0].innerHTML);

// Uppgift 5
// a
const span = document.querySelectorAll(".obs");
console.log(span[0].innerHTML);
// b
const p = document.querySelectorAll("p.content");
console.log(p);
for(let i=0;i<p.length;i++){
    console.log(p[i].textContent);
}
// c
const p2 = document.querySelectorAll(".hidden .content");
console.log(p2);

// 6
function numberOfInputs() {
    return document.getElementsByTagName('input').length;
}
console.log(numberOfInputs());