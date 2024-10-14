//synchronous and asynchronous Javascript

//synchronous programming
console.log("Start");
for (let i = 0; i < 1000000000; i++) {} // Long-running loop
console.log("End");
//The code executes step by step, causing a delay due to the loop.

//Async
console.log("Start");

setTimeout(() => {
  console.log("Asynchronous Task");
}, 1000); // This is an async function

console.log("End");
// The code doesn’t wait for setTimeout to complete. "End" gets printed first.

// Callback Example (Asynchronous)
function greetUser(name, callback) {
    console.log(`Hello, ${name}`);
    callback();
  }
  
  greetUser("Alice", function() {
    console.log("Welcome to the course!");
  });
  