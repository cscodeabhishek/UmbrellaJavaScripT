// forloop

// In JavaScript, the for loop is a common way to iterate over a block of code a specified number of times.The for loop syntax is straightforward:

// example:
// for (initialization; condition; increment) {
//     // code block to be executed
// }

// Here's a breakdown of the for loop components:

// initialization: This step is executed once before the loop starts. It usually sets up a counter variable.
// condition: The loop continues to run as long as this condition is true.
// increment: This step is executed after each iteration of the loop. It usually updates the counter variable.
//basic for loop:>>>>>>>>
for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}
//looping through an array
const fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
//Example 3: Nested for loop
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// console.log(i); // found error here '

//Error: forloop20.js:34 Uncaught ReferenceError: i is not defined at forloop20.js:34:13
// But if you can do this with using var then it won't create the error 
//
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log("value of i is ",i); //output here is i is 4