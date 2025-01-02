//synchronous and asynchronous Javascript

//synchronous programming: Javascript is synchronous (Single threade) programming language by default but we can made it to work like Async too.
console.log("Script Start");
for (let i = 0; i < 1000000000; i++) {} // Long-running loop {{Blocking the next script to be executed}} 
console.log("End");
//The code executes step by step, causing a delay due to the loop.

//Async
console.log("Script Start");
// setTimeOut function:In javascript setTimeOut function allows you to run some code after certain amount of time.
// This delay makes it a key function for handling the time based task in an asynchronous manner.
setTimeout(() => {
  console.log("Asynchronous Task");
}, 1000); // This is an async function

console.log("End");
// The code doesn’t wait for setTimeout to complete. "End" gets printed first.

// Callback Example (Asynchronous)
// Callback-function:A callback function is function that you pass into the another function as an arguments.
// The FIRST function execute this function later when needed.

function greetUser(name, callback) {
    console.log(`Hello, ${name}`);
    callback();
  }
  
  greetUser("Alice", function() {
    console.log("Welcome to the course!");
  });
  