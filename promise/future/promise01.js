// Story Point 
// Imagine you order a pizza. The restaurant tells you it will take 30 minutes. You can either sit there and wait for it (blocking your time), 
// or you can go do something else and get notified when it's ready (non-blocking). In JavaScript, Promises are like that notification. 
// They represent something that will happen in the future and allow you to continue doing other things while waiting for that task to be completed.

// Key Explanation:
// A Promise is an object in JavaScript that represents the eventual completion or failure of an asynchronous operation.
// It provides a cleaner and more readable way to handle asynchronous tasks compared to using callbacks.
// A Promise can be in one of three states:
// Pending: The initial state, the operation hasn't completed yet.
// Fulfilled: The operation has completed successfully, and the promise now has a resolved value.
// Rejected: The operation failed, and the promise now has a reason for the failure.

const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    let isSuccessful = true; // Imagine this is some API call
    if (isSuccessful) {
      resolve("Success!"); // Fulfilled
    } else {
      reject("Error!");    // Rejected
    }
  });

//   Handling Promises:
// then(): Used to handle fulfillment.
// catch(): Used to handle rejection.
// finally(): Used to execute code after promise settles, regardless of its outcome.
