// Path: html\array.js

// Array
var fruite = ["Mango", "orange", "Apple", "Banana", 11];
// array printing
console.log(fruite);
// aray length
console.log(fruite.length);
// array index
console.log(fruite[0]);

// add a elemet in array
fruite[5] = "Pineapple";
console.log(fruite);

// add a elemet in array
fruite[fruite.length] = "mangos";
console.log(fruite);

// add a elemet in array
fruite.push("oranges");
console.log(fruite);

// remove a elemet from array
fruite.pop();
console.log(fruite);

// remove a elemet from array
fruite.shift();
console.log(fruite);

// add a elemet in array thats removed by shift
fruite.unshift("Mango");
console.log(fruite);


