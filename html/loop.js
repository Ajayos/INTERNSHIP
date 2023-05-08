// filepath: html/loop.js
const nodelog= require('@ajayos/nodelog');
// for loop
log()
log('for loop')
for (let i = 0; i < 10; i++) {
    log(i);
}


// if else statements
log()
log('if else statements')
let a = 10;
let b = 20;
if (a > b) {
    log('a is greater than b');
} else {
    log('b is greater than a');
}

// while loop
log()
log('while loop')
let i = 0;
while (i < 10) {
    log(i);
    i++;
}

// do while loop
log()
log('do while loop')
let j = 0;
do {
    log(j);
    j++;
} while (j < 10);