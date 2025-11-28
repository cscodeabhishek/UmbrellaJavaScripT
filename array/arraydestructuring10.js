// Array Destructuring <Most Important>
// ES6 New concepet
const myArray = ['value1', 'value2'];
// const myArray1 = myArray[0];
// console.log(myArray1);
// const myArray2 = myArray[1];
// console.log(myArray2);

// In other programming language same practice can be done to store the value
// but in javascript provide shortcut for this

// Array Destructuring:Array destructuring is a convenient way to extract elements from an array and assign them to variables.
// It makes your code more concise and readable. 
// basic example
const numbers = [1, 2, 3];

// Destructuring assignment
const [a, b, c] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// Skipping Elements
// You can skip elements in the array by using extra commas:
const numbers1 = [1, 2, 3, 4, 5];

const [first, , third] = numbers1;

console.log(first); // 1
console.log(third); // 3

// Default Values
// You can also assign default values that will be used if the array doesn’t have enough elements:

const numbers2 = [1, 2];

const [x, y, z = 3] = numbers2;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 3

// Swapping Variables
// Array destructuring can be useful for swapping values between two variables:
let n = 1;
let m = 2;

[n, m] = [m, n];

console.log(n); // 2
console.log(m); // 1

// Nested Arrays
// Destructuring also works with nested arrays:

const nestedArray = [1, [2, 3], 4];

const [p, [q, r], t] = nestedArray;

console.log(p); // 1
console.log(q); // 2
console.log(r); // 3
console.log(t); // 4

// Rest Elements
// You can use the rest syntax to collect remaining elements into a new array:
const num = [1, 2, 3, 4, 5];

const [k, w, ...rest] = num;

console.log(k); // 1
console.log(w); // 2
console.log(rest); // [3, 4, 5]

// Function Parameters
// Array destructuring can also be used in function parameters:
function sum([i, u, g]) {
  return i + u + g;
}

const numb = [1, 2, 3];

console.log(sum(numb)); // 6

// Advance concept of Array Destructuring
// Destructuring with Complex Data Structures
// You can combine array and object destructuring for more complex data structures.
const data = {
  title: "UI Engineer",
  details: {
    name: "Abhishek Thakur",
    age: 26,
    skills: ["JavaScript", "React", "Node.js"]
  }
};

// Extracting nested data
const {
  title,
  details: {age, skills: [basicskills] }
} = data;

console.log(title); // UI Engineer
console.log(age); // 26
console.log(basicskills); // JavaScript
// Destructuring with Default Function Parameters
// Destructuring can be used to provide default values for function parameters, making function signatures more readable.

function configure({ host = "localhost", port = 80, protocol = "http" } = {}) {
  console.log(`Host: ${host}, Port: ${port}, Protocol: ${protocol}`);
}

// Call with custom configuration
configure({ host: "example.com", port: 8080 });

// Call with default configuration
configure();


// Destructuring in Iteration
// Destructuring can be used in loops to process each element of an array.

const people = [
  { name: "Abhishek Thakur", age: 26 },
  { name: "Sakshi", age: 26 },
  { name: "Reetika", age: 26 },
  { name: "Rohit", age:26 }
];

for (const { name, age } of people) {
  console.log(`${name} is ${age} years old`);
}

// Output:
// Abhishek Thakur is 26 years old
// Sakshi is 26 years old
// Reetika is 26 years old
// Rohit is 26 years old

// Destructuring with Promises
// Destructuring can be used to handle multiple promises and their results.

const fetchData = () => Promise.resolve({ data: "Some data" });
const fetchMoreData = () => Promise.resolve({ moreData: "More data" });

Promise.all([fetchData(), fetchMoreData()]).then(([{ data }, { moreData }]) => {
  console.log(data); // Some data
  console.log(moreData); // More data
});

// Destructuring with Generators
// When working with generators, destructuring can be used to extract yielded values.

function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}

const [firstt, second, thirdd] = numbers();

console.log(firstt); // 1
console.log(second); // 2
console.log(thirdd); // 3


// Nested Destructuring with Function Returns
// When functions return complex structures, destructuring can simplify the extraction of needed values.

function getPerson() {
  return {
    name: "Abhishek",
    info: {
      address: {
        city: "New Delhi",
        zip: 110045
      }
    }
  };
}

const {
  name,
  info: {
    address: { city, zip }
  }
} = getPerson();

console.log(name); // Abhishek
console.log(city); // New Delhi
console.log(zip); // 110045

// Swapping Multiple Variables
// Using destructuring, you can swap multiple variables at once.

let s = 1, f = 2, h = 3;

// Swap values
[s, f, h] = [h, s, f]

console.log(s); // 3
console.log(f); // 1
console.log(h); // 2
























