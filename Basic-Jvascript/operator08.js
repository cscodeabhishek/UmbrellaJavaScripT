// operator in javascript:
// data type (primitive data type)
// string "Harshita Thakur"
// number 2,4,5.6
// booleans
// undefined
// null
// bigInt
// Symbol
let age = 22;
let firstName = "Abhishek";
console.log(typeof age); //number
console.log(typeof firstName); // string

//convert number into string
console.log(typeof (age + "")) //output here is  become from (age of)number  String // output:  string
// but again if you want to remove the parenthesis after type of then you need to define this as belows:
age = age + "";
console.log(typeof age + "");

// convert string to number
let string = +"31"
console.log(typeof string);