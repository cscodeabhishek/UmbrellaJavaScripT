// and OR operator

// In JavaScript, the logical operators && (AND) and || (OR) are used to evaluate expressions and return a Boolean value. Here's how they work:

// AND Operator (&&)
// The && operator returns true if both operands are truthy; otherwise, it returns false. It performs short-circuit evaluation, meaning if the first operand is falsy, it won't evaluate the second operand.

Examples:
console.log(true && true);  // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// With non-boolean values:
console.log(1 && 0);        // 0 (falsy)
console.log(1 && 2);        // 2 (truthy)
console.log(null && "hello"); // null (falsy)
console.log("hello" && "world"); // "world" (truthy)

// OR Operator (||)
// The || operator returns true if at least one of the operands is truthy; otherwise, it returns false. It also performs short-circuit evaluation, meaning if the first operand is truthy, it won't evaluate the second operand.

// Examples:
console.log(true || true);  // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// With non-boolean values:
console.log(1 || 0);        // 1 (truthy)
console.log(0 || 2);        // 2 (truthy)
console.log(null || "hello"); // "hello" (truthy)
console.log("hello" || "world"); // "hello" (truthy)

// Combining AND and OR
// You can combine && and || in expressions to create more complex logical conditions. Remember to use parentheses () to ensure the correct order of evaluation.

// Examples:
console.log((true && false) || true);  // true
console.log((false || true) && false); // false
console.log(1 && (null || 2)); // 2
console.log((0 || 3) && (4 || 5)); // 4

// In these combined expressions, logical operators evaluate from left to right, but parentheses can be used to group conditions and control the order of evaluation.

// Truthy and Falsy Values
// In JavaScript, values are classified as either truthy or falsy. The following values are considered falsy:

// false
// 0
// -0 
// 0n (BigInt zero)
// "" (empty string)
// null
// undefined
// NaN
// All other values are considered truthy, including all objects.

// Understanding the behavior of && and || is essential for effective conditional logic in JavaScript.



let firstName = "abhishek";
let age = 15;
if (firstName === "Abhishek" && age >= 16) {  //simple logic here is if the left side of condition is true and right side of the condition is true then only the it considered as true other
// if one of the condition became false it return the else condition in js
    console.log("his name is thakur abhishek");
} else {
    console.log("ok");
    
}
// In or operator if the left side of the condition is true then it will go to  check the right side and run the if wala block or if both the condition is false then else wala block run kregaaaaaaaaaaaaa