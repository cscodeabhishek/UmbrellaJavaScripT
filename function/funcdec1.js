"use strict"; //this should be declared on line first itself to avoid the uncaughtReference error, so here you need to define the frirstName as var firstName and below same
console.log("this is working now");

var firstName="Abhishek";
console.log(firstName);

var firstname="thakur";
console.log(firstname);

// this is function scoped here--------
// A variable declared within a function is only accessible within that function. It cannot be accessed from outside the function.
function myFunction() {
    var x = 11; // x is function-scoped
    console.log(x); // Outputs: 10
}
myFunction();
    // console.log(x); // ReferenceError: x is not defined

// this is blocked scope here------------   
// Block scope refers to variables declared within a pair of curly braces {}. 
// This includes structures like if statements, loops, and the blocks of functions. Variables declared with let and const are block-scoped.
// if (true) {
//     let y = 20; // y is block-scoped
//     console.log(y); // Outputs: 20
// }
// console.log(y); // ReferenceError: y is not defined

let y = 20;
if (true) {
    let y = 30; // This y is different from the outer y
}

function exampleLet() {
    if (true) {
        let y = 10;
        console.log(y);
    }
    // console.log(y); // ReferenceError: y is not defined, because let is block-scoped
}
let day; // Declare day outside switch

switch(new Date().getDay()) {
    case 0:
        day = "sunday";
        break;
    case 1:
        day = "monday";
        break;
    case 2:
        day = "tuesday";
        break;
    case 3:
        day = "wednesday";
        break;
    case 4:
        day = "thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "saturday";
        break;
    default: 
        day = "invalid day"; // Handle invalid day
}

console.log(day); // Print the day based on the current day


var arr1= "quest".split('');
var arr2= arr1.reverse();
var arr3= "request".split('');
arr2.push(arr3);
console.log("array 1: lengh=" + arr1.length + "last="+ arr1.slice(-1));
console.log("array 2: lengh=" + arr2.length + "last="+ arr2.slice(-1));
console.log(arr1);
