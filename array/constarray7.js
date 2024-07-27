// const array js
const pi = 3.14;
// pi = 12;
console.log(pi);//Output error constarray7.js:3 Uncaught TypeError: Assignment to constant variable.

const fruits = ["apple", "banana"];
fruits = ["pineapple"];
fruits.push("kiwi");
console.log(fruits); // in array it got push in const var
//this is happening because fruits array having address of 0x11 and stored in heap 
//we are not changing this address[0x11]. we just push the new fruits
// this address will be going to fetch when fruits = ["kiwi"], because in heap this need to store on some address and by rule it give you error as same as Above 
// error: error constarray7 Uncaught TypeError: Assignment to constant variable.