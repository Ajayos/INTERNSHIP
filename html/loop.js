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

function add(number) {
    if (number <= 0) { 
     return 0; 
     } else { 
     return number + add(number - 1); 
     }
    }
   console.log( add(3));

   function foo() { 
    var a = 1; 
    if (a >= 1) { 
    let b = 2; 
    while (b < 5) { 
    let c = b * 2; 
    b++; 
    console.log( a + c ); 
    } 
    } 
    } 
    foo();

    function printAmount() { 
        console.log( amount.toFixed( 2 ) ); 
        } 
        var amount = 99.99; 
        printAmount();

        var string = "Welcome to this Javascript Guide!";
var reverseEntireSentence = reverseBySeparator(string, "");
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) { 
return string.split(separator).reverse().join(separator);
} 
console.log(reverseEachWord)

var x = 3;
var y = "3";
console.log(x + y);

function is_domain(str){ 
    regexp = /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i; 
    if (regexp.test(str)) { 
     return true; 
     } else { 
     return false; 
     }
    }
    console.log(is_domain('www.npm.co.uk'));
    console.log(is_domain('https://www.example.com'));


    (function() { 
        console.log(1); 
        setTimeout(function(){
        console.log(2)
        }, 1000); 
         setTimeout(function(){
        console.log(3)
        }, 0); 
        console.log(4);
        })();