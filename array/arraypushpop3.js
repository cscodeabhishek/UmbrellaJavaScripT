// push pop
let fruits = ['apple', 'orange', 'grapes', 'kiwi'];
console.log(fruits);
// push ---->in the last
fruits.push = ('banana'); // Output 
console.log(fruits) // Output : ['apple', 'orange', 'grapes', 'kiwi','banana'];
// pop-->delete the element from the array from the last index
let poppedFruits = fruits.pop();
console.log('Popped Fruits is',poppedFruits);
console.log(fruits); //output: ['apple', 'orange', 'grapes', 'kiwi'];
