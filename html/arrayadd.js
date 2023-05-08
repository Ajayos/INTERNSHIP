// filename: html/arrayadd.js

const nodelog= require('@ajayos/nodelog');

log()

// array 
let num = [2,5,8,6,9,14]
var sum = 0;
for (let i = 0; i < num.length; i++) {
    sum += num[i];
}

log(sum);