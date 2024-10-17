// In JavaScript, especially in the context of the browser, the microtask queue and callback queue (also called task queue or macrotask queue) are essential components of how asynchronous code is executed. These two queues help manage the execution order of different kinds of tasks, ensuring efficient performance in a single-threaded environment.

// 1. Event Loop Basics:
// JavaScript operates on a single thread, meaning it can only do one thing at a time. However, the browser or Node.js handles asynchronous operations (like HTTP requests, timers, etc.) through the event loop.

// The event loop decides which task from the queue gets executed next. It constantly checks two primary queues:

// Microtask queue
// Callback queue (Macrotask queue)
// 2. Microtask Queue:
// The microtask queue is a list of tasks that are promised to be executed as soon as possible, after the currently executing script or task finishes, and before any other macrotask.

// Common sources of microtasks:
// Promises (Promise.then, Promise.catch, Promise.finally)
// MutationObserver callbacks
// Some async/await operations
// queueMicrotask() function
// Characteristics:
// Microtasks are executed immediately after the currently running script finishes.
// Before moving on to any tasks from the callback (macrotask) queue, the event loop first checks if there are any pending microtasks and executes them all in order.
// This ensures that microtasks have a higher priority than macrotasks.
// 3. Callback Queue (Macrotask Queue):
// The callback queue, also known as the macrotask queue, holds tasks that are queued to be executed later, after the current task and all microtasks have completed.

// Common sources of macrotasks:
// setTimeout, setInterval
// I/O operations (like network requests)
// Event listeners (like click, keydown, etc.)
// UI rendering events
// Characteristics:
// Macrotasks are executed one at a time, and after each macrotask is completed, the event loop checks the microtask queue again before moving to the next macrotask.
// Macrotasks are usually used for tasks that can afford to be delayed slightly, like timers and rendering.
// 4. Execution Flow (Microtasks vs. Macrotasks):
// When the JavaScript runtime completes executing the current piece of code, it checks the microtask queue first.
// If there are any pending microtasks, they are executed in order until the microtask queue is empty.
// After that, the event loop picks a task from the callback queue (macrotask queue) and executes it.
// This process keeps repeating: macrotasks are executed one by one, and before each macrotask, all the microtasks are processed.


console.log('Start');

// Macrotask: setTimeout callback
setTimeout(() => {
    console.log('Macrotask: setTimeout');
}, 0);

// Microtask: Promise
Promise.resolve().then(() => {
    console.log('Microtask: Promise 1');
}).then(() => {
    console.log('Microtask: Promise 2');
});

console.log('End');




+----------------+           +----------------+
|  Macrotask  1   | ------->  |  Macrotask  2   |
+----------------+           +----------------+
                                |
     +------------------------------------------+
     |        Event Loop: Checks Microtask Queue|
     +------------------------------------------+
                                |
     +----------------+         +----------------+
     |  Microtask  1   | ------> |  Microtask  2  |
     +----------------+         +----------------+
                                |
   [ Move to next Macrotask in Macrotask Queue ]
