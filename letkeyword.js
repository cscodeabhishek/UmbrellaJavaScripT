// let keyword
// declare variable with let keyword
var firstName = "thakur";
console.log(firstName);
// major differance between var and let variable

// Scope:->
// var: var declarations are function-scoped. This means that a variable declared with var is available throughout the entire function in which it is declared, regardless of block scope.
// let: let declarations are block-scoped. A variable declared with let is only available within the block (enclosed by {}) in which it is declared.

// function exampleVar() {
//     if (true) {
//         var x = 10;
//     }
//     console.log(x); // 10, because var is function-scoped
// }

// function exampleLet() {
//     if (true) {
//         let y = 10;
//     }
//     console.log(y); // ReferenceError: y is not defined, because let is block-scoped
// }

// declare constant variable now
// In JavaScript, you can declare a constant variable using the const keyword. A constant variable is a variable that, once assigned a value, cannot be reassigned. However, it's important to understand the nuances of using const:
// const thakur = "2831"
// console.log(thakur);
// it will give you error because thakur is having constant value which is  2831
// output Error:Uncaught SyntaxError: Identifier 'thakur' has already been declared (at letkeyword.js:31:7)
// thakur = "2832";
// console.log(thakur);
