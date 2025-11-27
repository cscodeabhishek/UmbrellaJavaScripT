let fruits = ["kiwi", "Banana"];
let obj={} // object literal
console.log(fruits);
console.log(typeof fruits); // type of array is object here 
console.log(Array.isArray(fruits)); // it will told you that it is actually [array]

// Object in javascript--> In JavaScript, an object is a special data type used to store data in key–value pairs.
// Think of it like a real-world object that has properties (data) and behaviors (functions).
const user = {
  name: "Abhishek",
  age: 25,
  isActive: true,
  greet: function () {
    console.log("Hello!");
  }
};
// name, age, isActive, greet → keys

// "Abhishek", 25, true, function() → values
console.log(user.name);      // Dot notation
console.log(user["age"]);    // Bracket notation
// Why objects are useful?

// They allow you to group related information together.

// Almost everything in JS (arrays, functions, dates, etc.) is built using objects.

