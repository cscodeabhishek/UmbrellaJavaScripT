//intro to arrays
// refernce type
// how to create arrays


//order collection of items

// let fruits = ["apple", "mango", "grapes"];
// let number = [1, 2, 3, 4];
// let mixed = [1, "abhishek", "abhishek", 2, 2.5, 2.500, null, undefined];
// console.log(fruits);
// console.log(number);
// console.log(mixed);

let fruits = ["aaple", "mango", "banana"]
console.log(fruits[1]); // mango
// Note: array is immutable so we can directly replace or add the elements in the array
fruits[2] = "kiwi";
console.log(fruits);// apple, mango, kiwi -- it replace the banana why because it is in the 2th index of array
console.log(fruits.length);
console.log(typeof fruits);

// array is object in javascript
// Importing a module
import { fetchData } from './dataModule';

// Arrow function and default parameters
const greet = (name = 'World') => `Hello, ${name}!`;

// Using let and const
const fruits = ['apple', 'banana', 'cherry'];
let [firstFruit, secondFruit, thirdFruit] = fruits;

// Template literals and destructuring
const fruitMessage = `First fruit: ${firstFruit}, Second fruit: ${secondFruit}`;

// Rest and spread operators
const numbers = [1, 2, 3, 4, 5];
const [one, two, ...rest] = numbers;
const newNumbers = [0, ...numbers, 6];
////
// array  is object in javascript