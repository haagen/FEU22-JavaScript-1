
let input = 'Det är kul att programmera i JavaScript!!!';
let regex = /\w{4,}/ig;

let match = input.match(regex); // ['programmera', 'JavaScript]
console.log(match);

let search = input.search(regex); // 15 = postitionen av programmera
console.log(search);

regex = /\w{4,}/ig;

let test = regex.test(input);   // true if we have a match
console.log(test);

regex = /\w{4,}/ig;
let exec = regex.exec(input); // programmera
console.log(exec);
exec = regex.exec(input);     // JavaScript
console.log(exec);
exec = regex.exec(input);    // no match - null
console.log(exec);