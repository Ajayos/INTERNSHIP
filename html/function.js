// filename: html/function.js


// function without parameter and return
function add() {
    let a = 10;
    let b = 20;
    let c = a + b;
    console.log(c);
}
// function with parameter and return

function wradd(a, b) {
    return a + b;
}

// funtion with parameter and without return
function wadd2(a, b) {
    console.log(a + b);
}

// function without parameter and  with return
function add2() {
    let a = 10;
    let b = 20;
    return a + b;
}

// printing all function

// without parameter and return
add();

// with parameter and return
console.log(wradd(10, 20));

// with parameter and without return
wadd2(10, 20);

// without parameter and with return
console.log(add2());

//////////////////////////////////////////
/////////////////////////////////////////
////////////////////////////////////////
console.log('\n\n\n');


// function with parameter and return
var mul = function (a, b) {
    return a * b;
}


// es6 syntax Arrow function
var mul2 =  (a, b) => {
    console.log(a * b);
}

// calling function
console.log(mul(10, 20));
mul2(10, 20);



