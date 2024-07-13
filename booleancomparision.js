//Boolean and comparision operator
// boolean return true or false

// let num1 = 8;
// let num2 = 8;
// console.log(num1 > num2);
// //output false

// // == vs ===
// console.log(num1 == num2); // output true

let num1 = "8";
let num2 = 8;
console.log(num1 > num2);
//output false

// == vs ===
console.log(num1 = num2); // output true
// still the output is coming true why because == check value not data type
// === check here both datatype and value too. so the output for above code is false.
console.log(num1 === num2);  // output false
// anything in the "" in js is considered as string. so num1 is string and num2 is number so thats why it is coming as false|
//
// != vs !==
let number1 = 8;
let number2 = "8";
// console.log(number1 != number2); //output false
console.log(number1 != number2);  // output false
console.log(number1 !== number2);// here it will check type also via == output true
