// undefined

let firstName;
console.log(typeof firstName); // output is undefined
let firstname = "";
console.log(typeof firstname); //output is string

// null
let myVariable = null;
console.log(myVariable);
myVariable = "thakur"
console.log(myVariable, typeof myVariable);
console.log(typeof null);
// bug  error in javascript


//BigInt
let myNumber = 123n;
console.log(myNumber); 

let myNumber2 = BigInt(2); //BigInt here is constructor
console.log(myNumber2);
console.log(myNumber2+ myNumber);
// error undefinedNull.js:23 Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions at undefinedNull.js:23:22
// you can mixed other number with BigInt
// by adding n to myNumber it will give you output is 125n
