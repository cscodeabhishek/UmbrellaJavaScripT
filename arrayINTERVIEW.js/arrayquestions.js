// 1. push()
let fruits =["apple","kiwi"];
let pushfruits = fruits.push("grapes");
console.log(pushfruits);
console.log(fruits);
// Adds one or more elements to the end of an array and returns the new length.

// 2. pop()
let fruits1 =["apple","kiwi"];
let removedFruits = fruits1.pop();
console.log(removedFruits);
console.log(fruits1);

// Removes the last element from an array and returns that element.

// 3. shift()
let fruits2 =["apple","kiwi"];
let shiftFruit = fruits2.shift();
console.log(shiftFruit);
console.log(fruits2);
// Removes the first element from an array and returns it.


// 4. unshift()
let fruits3 =["apple","kiwi"];
let unshiftFruit = fruits3.unshift("Banana");
console.log(unshiftFruit);
console.log(fruits3);

// Adds one or more elements to the beginning of an array and returns the new length.


// 5. map()
// Creates a new array with the results of calling a function on every element in the array.
let numbers = [1,2,3];
let doubled = numbers.map(x=>x*2);
console.log(doubled);

// 6. filter()
// Creates a new array with all elements that pass the test implemented by the provided function.
let number1 =[1,2,3,4,5,6,7,8];
let evenNumber = number1.filter(x=>x%2===0);
console.log(evenNumber);

// 7. reduce()
// Executes a reducer function on each element of the array, resulting in a single output value.
let number2 =[1,2,3,4];
let sum = numbers.reduce((total,current)=>total + current,0);
console.log(sum);

// 8. find()
// Returns the first element that satisfies the provided testing function.
let number=[1,2,3];
let findNumber = number.find(x => x>2);
console.log(number);

// 9. findIndex()
// Returns the index of the first element that satisfies the provided testing function.
let numbersss=[1,2,3];
let IndexNumber = number.findIndex(x => x>2);
console.log(numbersss);
// 10. slice()
// Returns a shallow copy of a portion of an array into a new array.
let fruitss=["apple","banana","kiwi","grapes"];
let slicedfruits = fruitss.slice(1,3);
console.log(slicedfruits);

// 11. splice()
// Adds/removes elements from an array and returns the removed elements.
let fruit1 =["apple"];
fruit1.splice(1,1,"grapes");
console.log(fruit1);

// 12. concat()
// Merges two or more arrays and returns a new array.
let fruit6=["kiwi"];
let moreFruits =["orange"];
let allfruits=fruit6.concat(moreFruits);
console.log(allfruits);
// 13. sort()
// Sorts the elements of an array in place and returns the sorted array.
let numbersort=[1,2,9,8,7,3,4,5];
numbersort.sort();
console.log(numbersort);


// 14. reverse()
// Reverses the elements of an array in place.
let fruitssssss =["kiwi","apple"];
fruitssssss.reverse();
console.log(fruitssssss);

// 15. forEach()
// Executes a provided function once for each array element.
let fruiits =["apple","banana"];
fruiits.forEach(fruiit => console.log(fruiit));

// Event Delegation
// Imagine This:
// Let’s say you’re at a party, and there’s a host (the parent) who wants to greet everyone. Instead of the host running around and greeting each person individually, 
// they stand near the entrance (the event listener on the parent). As each guest (the child element) arrives, the host can greet them as they walk in.

// In JavaScript Terms:
// Event delegation is like assigning one person (a single event listener) to handle things for a group (many child elements) by standing in one spot (the parent element) and listening to see who does something (clicks, submits, etc.).

// Why Use It?
// If you have 100 buttons, instead of adding a listener to each button, you add one listener to the button's container. When a button is clicked, that listener can figure out exactly which button was clicked and handle it.