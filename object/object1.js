// In JavaScript, an object is a collection of properties, where each property is defined as a key-value pair. 
// Objects are used to store various keyed collections and more complex entities.Here's a basic overview of objects in JavaScript:


// Properties and Values:

// Properties are the keys (or names) in an object, and they can be strings or symbols.
// Values can be any valid JavaScript value, including other objects, arrays, functions, or primitive data types (strings, numbers, etc.).

// Objects in JavaScript are fundamental to the language and are used extensively for a wide variety of purposes, from simple data storage to the basis of more complex constructs such as classes and modules.

// const person = { name: "Thakur", age: 25 }
// console.log(person);

// // how to access data from object
// console.log(person.name);

// // how to add key value pair to objects

// person.gender = "male";
// console.log(person);

// // difference between dot and bracket Notation
// const person1 = {
//     name: "Abhishek",
//     age: 22,
//     hobbies: ["cricket","listen music","sleeping"]
// }
// console.log(person1);

const key = "email";
const person2 = {
    name: "Abhishek",
    age: 22,
    "person hobbies": ["cricket", "listen music", "sleeping"] // to acces "person hobbies" where the space is key used the bracket notationas below
}
person2[key]="abhishek@gmail.com";
console.log(person2);

// how to iterate the object
// for in loop
// object.keys
// for (let key in person2) {
//     console.log(person2[key]); 
// }


for (let key in person2) {
    // console.log(`${key}:${person2[key]}`);  // 1st method
    console.log(key,":",person2[key]);         // 2nd method
}