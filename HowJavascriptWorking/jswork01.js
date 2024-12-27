// Compilation
// Code execution
// why compilation
// How Javascript works and its code execution
// what is global execution context?
// what is local execution context?
// closures

console.log(this);
console.log(window);
console.log(firstName);
var firstName = "abhishek";
console.log(firstName);

//JavaScript works as an interpreted, event-driven, single-threaded language designed to run inside a host environment like a web browser or Node.js. 
//Let's break down how it works step by step:

// JavaScript is:

// 1.)Interpreted Language: It doesn’t need to be compiled beforehand; the browser or runtime environment executes it directly.

// 2.)Single-threaded: JavaScript executes code line by line on a single main thread. 

// It doesn't execute multiple parts of code simultaneously in parallel, but it can handle asynchronous tasks using callbacks, promises, or async/await.

// 3.)Event-driven: JavaScript waits for events (like user interactions, HTTP requests, or timers) and processes them in order through an event loop.

// 4.)Dynamic Language: Variables can hold any type of data at runtime, and it supports dynamic typing.



// //>>>>>>>>>>>>>>>>How It Works Internally?
// 1.)Execution Contexts: JavaScript creates a context to execute code. The Global Execution Context is the first to be created. 
// When functions are called, new Function Execution Contexts are created and managed using the Call Stack. 

// 2.)Memory Management: JavaScript uses the Heap for storing objects and the Stack for execution contexts. 

// 3.)JavaScript Engine: Modern engines like Google's V8 convert JavaScript code into optimized machine code using techniques like Just-In-Time (JIT) compilation.

// 4.)Event Loop: Manages asynchronous operations by handling the callback queue and the main thread.

console.log("Start");

setTimeout(() => {
  console.log("Timer finished");
}, 2000);

console.log("End");

let foo="Abhishek";
console.log(foo);
function getFullName(firstName, lastname){
    console.log(arguments);
    let myVar = "var inside func";
    console.log(myVar);
    const fullName =firstName +""+lastname;
    return fullName;
}

const personName=getFullName("Abhishehk","thakur");
console.log(personName);


// lexicall analyzer in Js
const lastName="thakur" // GEC global execution context

const printName = function(){
    const firstName="abhishek";
    console.log(firstName);
    console.log(lastName); // here javascript is not finding the lastname in its functional scope so it moves to the GEC and found there and print as "thakur"
}
printName();