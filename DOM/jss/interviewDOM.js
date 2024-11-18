// Shorthand Notes on DOM in JavaScript for Interviews
// 1. What is the DOM?
// DOM: Document Object Model.
// Definition: A programming interface for HTML and XML documents.
// Represents the page so programs can change the document structure, style, and content.
// Tree Structure: Document → HTML → Head, Body → Elements → Text Nodes.
// 2. How to access the DOM?
// Methods to Select Elements:
// document.getElementById('id') – Selects an element by ID.
// document.getElementsByClassName('class') – Selects elements by class.
// document.getElementsByTagName('tag') – Selects elements by tag name.
// document.querySelector('selector') – Selects the first matching element.
// document.querySelectorAll('selector') – Selects all matching elements.
// 3. Modifying the DOM
// Content Manipulation:
// element.textContent – Get/Set text content.
// element.innerHTML – Get/Set HTML content.
// Attributes:
// element.getAttribute('attr') / element.setAttribute('attr', 'value').
// element.id, element.className (direct properties).
// CSS Styles:
// element.style.property – Modify CSS inline.
// element.classList.add('class'), element.classList.remove('class').
// 4. Creating/Removing Elements
// Create Elements:
// document.createElement('tag') – Create a new element.
// document.createTextNode('text') – Create a text node.
// Append/Insert Elements:
// parent.appendChild(child) – Append a child.
// parent.insertBefore(newChild, referenceChild) – Insert before a reference node.
// Remove Elements:
// parent.removeChild(child) – Removes a child.
// 5. Event Handling
// Adding Events:
// Inline: <button onclick="function()">.
// Add Listener: element.addEventListener('event', callback).
// Types of Events:
// Mouse: click, dblclick, mouseover, mouseout.
// Keyboard: keydown, keyup.
// Form: submit, change, input.
// Remove Event:
// element.removeEventListener('event', callback).
// 6. Traversing the DOM
// Parent/Child/Sibling:
// parentNode, firstChild, lastChild, nextSibling, previousSibling.
// Better Alternates:
// parentElement, firstElementChild, lastElementChild, nextElementSibling, previousElementSibling.

// 7. Common Interview Questions
//---->How do you find an element with a specific class?
let elements = document.getElementsByClassName('className');

//-->How to dynamically add a class to an element?
element.classList.add('new-class');
//-->What’s the difference between innerHTML and textContent?
// innerHTML: Parses and sets HTML content.
// textContent: Sets plain text only.
//--->How do you attach multiple events to an element?
element.addEventListener('click', func1);
element.addEventListener('click', func2);
//--->What is event delegation?
// Leverages event bubbling; attach a single listener to a parent element to handle events for child elements.




//------>>>>>>> How to Access the DOM?
// Methods to Access Elements:

// By ID: document.getElementById('id').
// By Class: document.getElementsByClassName('class').
// By Tag: document.getElementsByTagName('tag').
// By CSS Selector:
// Single: document.querySelector('selector').
// Multiple: document.querySelectorAll('selector').
// Examples:

const div = document.getElementById('myDiv');
const buttons = document.querySelectorAll('button');
const inputs = document.getElementsByTagName('input');

// DOM Properties: 
// document.body: Accesses the <body> element.
// document.documentElement: Accesses the <html> element.
// document.head: Accesses the <head> element.
// -- Modifying the DOM

// Get/Set Text: element.textContent or element.innerText.
// Get/Set HTML: element.innerHTML.
// Attributes:

// Get: element.getAttribute('attr').
// Set: element.setAttribute('attr', 'value').
// Remove: element.removeAttribute('attr').
// Styles:

// Inline Styles: element.style.property = 'value';.
// Add/Remove Classes:
// Add: element.classList.add('class').
// Remove: element.classList.remove('class').
// Toggle: element.classList.toggle('class').
// Example:
const button = document.querySelector('button');
button.textContent = 'Click Me!';
button.style.backgroundColor = 'blue';
button.classList.add('active');
/// Creating and Removing Elements
// Create Elements:

// document.createElement('tag'): Creates a new HTML element.
// document.createTextNode('text'): Creates a new text node.
// Append/Insert:

// Append: parent.appendChild(child).
// Insert Before: parent.insertBefore(newNode, referenceNode).
// Remove Elements:

// parent.removeChild(child).
// Examples:
// const newDiv = document.createElement('div');
// newDiv.textContent = 'Hello World!';
// document.body.appendChild(newDiv);
// /// --->Traversing the DOM
// Parent/Child/Sibling:

// Parent: node.parentElement.
// Children: node.children or node.childNodes.
// First/Last Child: node.firstElementChild / node.lastElementChild.
// Sibling: node.nextElementSibling / node.previousElementSibling.
// Example:
// const parent = document.querySelector('.container');
// console.log(parent.firstElementChild); // First child element
// 6. Events in DOM
// Event Basics:

// Attach: element.addEventListener('event', callback).
// Remove: element.removeEventListener('event', callback).
// Common Events:

// Mouse: click, dblclick, mouseover, mouseout.
// Keyboard: keydown, keyup.
// Form: submit, input, change.
// Event Object:

// Access event details in the callback function:

// element.addEventListener('click', (event) => {
//   console.log(event.target); // Element that triggered the event
// });
// Event Delegation:

// Use a parent element to handle events for its child elements.
// Example:

// document.querySelector('ul').addEventListener('click', (event) => {
//   if (event.target.tagName === 'LI') {
//     console.log(event.target.textContent);
//   }
// });
// 7. Event Propagation
// Phases:

// Capture Phase: Events are captured from the root to the target.
// Target Phase: Event reaches the target element.
// Bubble Phase: Event bubbles up from the target to the root.
// Stop Propagation:

// event.stopPropagation(): Prevents further propagation in the capture/bubble phases.
// Prevent Default:

// event.preventDefault(): Stops default browser behavior (e.g., link redirection).
// 8. Advanced DOM Concepts
// Shadow DOM:

// Encapsulation for web components.
// Example:
// const shadowRoot = element.attachShadow({ mode: 'open' });
// shadowRoot.innerHTML = '<p>Shadow DOM Content</p>';
// MutationObserver:

// Monitors changes to the DOM.
// Example:
// const observer = new MutationObserver((mutations) => {
//   console.log(mutations);
// });
// observer.observe(document.body, { childList: true });
// // Performance Optimization
// Minimize Reflows:
// Batch DOM changes.
// Use DocumentFragment for multiple appends.
// Avoid Inline Styles: Use CSS classes instead.
// Use requestAnimationFrame for smooth updates.
// 10. Frequently Asked DOM Questions
// How do you update a dynamic list?

// const ul = document.querySelector('ul');
// const li = document.createElement('li');
// li.textContent = 'New Item';
// ul.appendChild(li);
// How is innerHTML different from textContent?

// innerHTML parses HTML, while textContent only manipulates plain text.
// How do you delegate events efficiently?

// Attach a listener to the parent element and filter event.target.
// What is the difference between node.childNodes and node.children?

// childNodes: Includes all nodes (text, comment, element).
// children: Includes only element nodes.
// How do you handle a click outside a specific element?

// document.addEventListener('click', (event) => {
//   if (!element.contains(event.target)) {
//     console.log('Clicked outside');
//   }
// });
//------>>>>>>> Practice Questions >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Write a function to create and append a new <p> element dynamically.
// Explain event delegation with code.
// Implement a search filter where typing in an input field filters a list of items.
// Create a counter using JavaScript, incrementing the value when a button is clicked.
// By mastering these concepts, you’ll be well-prepared for any DOM-related interview questions!

// Solutions to DOM Practice Questions
// 1. Create and append a new <p> element dynamically
// Problem: Write a function to create a <p> element, add some text to it, and append it to the document body.

function createParagraph() {
  // Step 1: Create a <p> element
  const paragraph = document.createElement('p');
  
  // Step 2: Add text content to the <p> element
  paragraph.textContent = 'This is a dynamically added paragraph.';
  
  // Step 3: Append the <p> element to the body
  document.body.appendChild(paragraph);
}

// Call the function
createParagraph();
// Explain event delegation with code
// Problem: Implement event delegation to handle clicks on a list of items.

// Step 1: Add event listener to the parent element
document.querySelector('ul').addEventListener('click', (event) => {
  // Step 2: Check if the clicked target is a <li> element
  if (event.target.tagName === 'LI') {
    // Step 3: Log the text content of the clicked <li>
    console.log(`Clicked item: ${event.target.textContent}`);
  }
});

// Example HTML for the above JS
// <ul>
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
// </ul>
Explanation:
function setupSearchFilter() {
  // Step 1: Get references to the input field and the list
  const input = document.getElementById('searchInput');
  const listItems = document.querySelectorAll('ul li');

  // Step 2: Add an event listener to the input field
  input.addEventListener('input', () => {
    const filter = input.value.toLowerCase(); // Convert input to lowercase

    // Step 3: Filter the list items
    listItems.forEach((item) => {
      if (item.textContent.toLowerCase().includes(filter)) {
        item.style.display = ''; // Show the item
      } else {
        item.style.display = 'none'; // Hide the item
      }
    });
  });
}


setupSearchFilter();


function setupCounter() {
  // Step 1: Initialize the counter value
  let count = 0;

  // Step 2: Get references to the counter display and button
  const counterDisplay = document.getElementById('counterDisplay');
  const incrementButton = document.getElementById('incrementButton');

  // Step 3: Add an event listener to the button
  incrementButton.addEventListener('click', () => {
    count++; // Increment the counter
    counterDisplay.textContent = `Count: ${count}`; // Update the display
  });
}

// Example HTML for the above JS
// <div id="counterDisplay">Count: 0</div>
// <button id="incrementButton">Increment</button>

// Call the function
setupCounter();
