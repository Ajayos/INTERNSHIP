// filepath: html/arrayofobject.js

// array of objects 
var marks = [ {name:'Ajay o s', age: 20, place: "perumbavoor"}, {name:'akash', age:20, place: "perumbavoor"}, {name:'chem j', age:20, place: "perumbavoor"}]
console.log(marks);

// array of objects of index 0
console.log(marks[0].name);
console.log(marks[0].age);


// using concatination
console.log(`Name : ${marks[0].name}, Age : ${marks[0].age}`);

// name with how many years old and he from where

marks.forEach(mark => {
    console.log(`${mark.name} is  ${mark.age} years old and he comes from ${mark.place}`)
});
