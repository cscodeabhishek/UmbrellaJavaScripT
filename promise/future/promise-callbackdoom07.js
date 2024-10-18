const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

function pyramid(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element) {
                element.textContent = text; // Removed quotes to use the passed variable
                element.style.color = color; // Removed quotes to use the passed variable
                resolve(); // Resolve the promise when successful
            } else {
                reject("Element not found"); // Reject the promise in case of failure
            }
        }, time);
    });
}

// Example usage:
pyramid(heading1, "Heading 1", "red", 1000)
    .then(() => pyramid(heading2, "Heading 2", "blue", 1000))
    .then(() => pyramid(heading3, "Heading 3", "green", 1000))
    .then(() => pyramid(heading4, "Heading 4", "purple", 1000))
    .then(() => pyramid(heading5, "Heading 5", "orange", 1000))
    .then(() => pyramid(heading6, "Heading 6", "pink", 1000))
    .then(() => pyramid(heading7, "Heading 7", "brown", 1000))
    .catch((error) => console.log(error));


//  Curly braces: Added curly braces to properly enclose the function body and new Promise.
// Element attributes: Used the text and color variables directly instead of strings.
// Promises: Resolved or rejected the promise depending on the condition.
// Promise chaining: Demonstrated how to chain multiple pyramid() calls to avoid callback hell, which is also referred to as "pyramid of doom."
// This code now avoids callback hell by chaining promises and correctly uses Promises to handle asynchronous logic.