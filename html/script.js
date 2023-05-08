// Path: html\script.js
const nodelog= require('@ajayos/nodelog');

log()
log('hellow world!')
log('Iam Ajay OS') 
log()


const me = {
    name: 'Ajay',
    age: 20,
    address: {
        place: "eranakulam",
        country: 'India',
    }
}

console.log(me);
let mydata = `My name is ${me.name} and my place is ${me.address.place}`;
log(mydata);