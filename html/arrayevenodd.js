// filename: html/arrayevenodd.js

const nodelog= require('@ajayos/nodelog');

log()

// array
let nums = [2,3,5,6,8,11]

// check it is odd or evan then print it

nums.forEach((num) => {
    if (num % 2 == 0) {
        log(num + " is even");
    }
    else {
        log(num + " is odd");
    }
});
