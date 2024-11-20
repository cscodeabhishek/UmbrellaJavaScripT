// Intro to arrays
// how to create arrays
// array indexing

//In JavaScript, arrays are a versatile data structure used to store multiple values in a single variable. Here are some key points about arrays in JavaScript
//Creating an Array
// You can create arrays in several ways:>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..

// Using square brackets:>>>>>>>>>>>>>>>>>>>>>>..
// let fruits = ["Apple", "Banana", "Cherry"];

// Using the Array constructor:
// let fruits = new Array("Apple", "Banana", "Cherry");

// Accessing Elements>>>>>>>>>>>>>>>>>>>.
// You can access elements in an array using their index (starting from 0):

// let firstFruit = fruits[0]; // "Apple"
// let secondFruit = fruits[1]; // "Banana"

// Modifying Elements>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..
// You can modify elements by accessing them directly:
// fruits[1] = "Blueberry"; // ["Apple", "Blueberry", "Cherry"]

// Array Properties and Methods
// Length:
// let length = fruits.length; // 3

// Push: Add an element to the end of the array.
// fruits.push("Date"); // ["Apple", "Blueberry", "Cherry", "Date"]

// Remove the last element of the array.
// let lastFruit = fruits.pop(); // "Date"; fruits is now ["Apple", "Blueberry", "Cherry"]

// fruits.unshift("Apricot"); // ["Apricot", "Blueberry", "Cherry"]
// fruits.unshift("Apricot"); // ["Apricot", "Blueberry", "Cherry"]

// Create a new array from a subset of an array.
// let citrus = fruits.slice(1, 3); // ["Blueberry", "Cherry"]

// Splice: Add or remove elements from an array.
// fruits.splice(1, 1, "Blackberry"); // ["Apricot", "Blackberry", "Cherry"]

// Find the index of an element.
// let index = fruits.indexOf("Cherry"); // 2

// ForEach: Execute a function for each element.
//     fruits.forEach(function(item, index, array) {
//   console.log(item, index);
// });

//  Map: Create a new array by applying a function to each element.
//     let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
// // ["APRICOT", "BLACKBERRY", "CHERRY"]
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
// Here's a practical example that combines several of the above methods:
// let numbers = [1, 2, 3, 4, 5];

// // Adding elements
// numbers.push(6);
// numbers.unshift(0);

// // Removing elements
// numbers.pop();
// numbers.shift();

// // Accessing and modifying elements
// numbers[2] = 99;

// // Iterating over the array
// numbers.forEach(num => console.log(num));

// // Mapping to create a new array
// let squares = numbers.map(num => num * num);

// // Finding an element's index
// let index = numbers.indexOf(99);

// console.log(numbers); // [1, 2, 99, 4]
// console.log(squares); // [1, 4, 9801, 16]
// console.log(index); // 2
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..

