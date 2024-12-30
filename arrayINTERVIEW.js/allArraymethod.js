// at(): Access an element at a specific index (supports negative indexing).  
const arr = [10, 20, 30];
console.log(arr.at(-1)); // Output: 30

// concat(): Combine two or more arrays into one.
const arr1 = [1, 2], arr2 = [3, 4];
console.log(arr1.concat(arr2)); // Output: [1, 2, 3, 4]


// constructor: Creates a new array instance.
const array = new Array(3);
console.log(array); // Output: [empty × 3]


// copyWithin(): Copies part of the array to another location in the same array.
const arry = [1, 2, 3, 4];
console.log(arry.copyWithin(1, 2)); // Output: [1, 3, 4, 4]


// entries(): Returns an iterator of key-value pairs for array indices and elements.
const arri = ['a', 'b'];
for (const [i, v] of arri.entries()) console.log(i, v);
// Output: 0 'a', 1 'b'


// every(): Checks if all elements pass a test (returns true or false).

// fill(): Fills elements with a static value.

// filter(): Creates a new array with elements that pass a test.

// find(): Finds the first element that satisfies a condition.

// findIndex(): Returns the index of the first element that satisfies a condition.

// findLast(): Finds the last element that satisfies a condition.

// findLastIndex(): Returns the index of the last element that satisfies a condition.

// flat(): Flattens nested arrays to a specified depth.

// flatMap(): Maps and flattens an array in one step.

// forEach(): Executes a function for each array element.

// includes(): Checks if the array contains a specific value.

// indexOf(): Returns the first index of a value or -1 if not found.

// join(): Combines all elements into a string with a specified separator.

// keys(): Returns an iterator for array indices.

// lastIndexOf(): Returns the last index of a value or -1 if not found.

// length: Holds the total number of elements in the array.

// map(): Creates a new array by transforming each element.

// pop(): Removes and returns the last element.

// push(): Adds one or more elements to the end of the array.

// reduce(): Reduces the array to a single value by applying a function.

// reduceRight(): Like reduce() but processes the array from right to left.

// reverse(): Reverses the order of elements in the array.

// shift(): Removes and returns the first element.

// slice(): Extracts a section of the array into a new array.

// some(): Checks if at least one element passes a test.

// sort(): Sorts the elements in place using a compare function.

// splice(): Adds or removes elements at a specific index.

// toLocaleString(): Converts elements to strings, respecting locale settings.

// toReversed(): Returns a new array with elements reversed.

// toSorted(): Returns a new array sorted without modifying the original.

// toSpliced(): Returns a new array with specified splicing.

// toString(): Converts the array to a string.

// unshift(): Adds elements to the beginning of the array.

// values(): Returns an iterator for the array values.

// Symbol.iterator: Makes the array iterable.

// Symbol.unscopables: Prevents certain methods from appearing in with statements.

// __proto__: Links the array to its prototype object for inheritance.
at()



const arrii = [10, 20, 30];
console.log(arrii.at(-1)); // Output: 30
concat()



const arr11 = [1, 2], arr22 = [3, 4];
console.log(arr11.concat(arr22)); // Output: [1, 2, 3, 4]
constructor



const arre = new Array(3);
console.log(arre); // Output: [empty × 3]
copyWithin()



const arriee = [1, 2, 3, 4];
console.log(arriee.copyWithin(1, 2)); // Output: [1, 3, 4, 4]
entries()



const arr = ['a', 'b'];
for (const [i, v] of arr.entries()) console.log(i, v);
// Output: 0 'a', 1 'b'
every()



const arr = [2, 4, 6];
console.log(arr.every(n => n % 2 === 0)); // Output: true
fill()



const arr = [1, 2, 3];
console.log(arr.fill(0)); // Output: [0, 0, 0]
filter()



const arr = [1, 2, 3];
console.log(arr.filter(n => n > 1)); // Output: [2, 3]
find()



const arr = [5, 12, 8];
console.log(arr.find(n => n > 10)); // Output: 12
findIndex()



const arr = [5, 12, 8];
console.log(arr.findIndex(n => n > 10)); // Output: 1
findLast()



const arr = [5, 12, 8];
console.log(arr.findLast(n => n < 10)); // Output: 8
findLastIndex()



const arr = [5, 12, 8];
console.log(arr.findLastIndex(n => n < 10)); // Output: 2
flat()



const arr = [1, [2, [3]]];
console.log(arr.flat(2)); // Output: [1, 2, 3]
flatMap()



const arr = [1, 2];
console.log(arr.flatMap(n => [n, n * 2])); // Output: [1, 2, 2, 4]
forEach()



const arr = [1, 2];
arr.forEach(n => console.log(n)); // Output: 1, 2
includes()



const arr = [1, 2];
console.log(arr.includes(2)); // Output: true
indexOf()



const arr = [1, 2, 3];
console.log(arr.indexOf(2)); // Output: 1
join()



const arr = [1, 2];
console.log(arr.join('-')); // Output: "1-2"
keys()



const arr = ['a', 'b'];
for (const key of arr.keys()) console.log(key);
// Output: 0, 1
lastIndexOf()



const arr = [1, 2, 1];
console.log(arr.lastIndexOf(1)); // Output: 2
length



const arr = [1, 2];
console.log(arr.length); // Output: 2
map()



const arr = [1, 2];
console.log(arr.map(n => n * 2)); // Output: [2, 4]
pop()



const arr = [1, 2];
console.log(arr.pop()); // Output: 2
push()



const arr = [1];
arr.push(2);
console.log(arr); // Output: [1, 2]
reduce()



const arr = [1, 2, 3];
console.log(arr.reduce((sum, n) => sum + n, 0)); // Output: 6
reduceRight()



const arr = ['a', 'b', 'c'];
console.log(arr.reduceRight((str, n) => str + n)); // Output: "cba"
reverse()



const arr = [1, 2];
console.log(arr.reverse()); // Output: [2, 1]
shift()



const arr = [1, 2];
console.log(arr.shift()); // Output: 1
slice()



const arr = [1, 2, 3];
console.log(arr.slice(1)); // Output: [2, 3]
some()



const arr = [1, 2];
console.log(arr.some(n => n > 1)); // Output: true
sort()



const arr = [3, 1, 2];
console.log(arr.sort()); // Output: [1, 2, 3]
splice()



const arr = [1, 2, 3];
arr.splice(1, 1);
console.log(arr); // Output: [1, 3]
toLocaleString()



const arr = [1234.56];
console.log(arr.toLocaleString('en-US')); // Output: "1,234.56"
toReversed()



const arr = [1, 2];
console.log(arr.toReversed()); // Output: [2, 1]
toSorted()



const arr = [3, 1, 2];
console.log(arr.toSorted()); // Output: [1, 2, 3]
toSpliced()



const arr = [1, 2, 3];
console.log(arr.toSpliced(1, 1)); // Output: [1, 3]
toString()



const arr = [1, 2];
console.log(arr.toString()); // Output: "1,2"
unshift()



const arr = [2];
arr.unshift(1);
console.log(arr); // Output: [1, 2]
values()



const arr = ['a', 'b'];
for (const val of arr.values()) console.log(val);
// Output: "a", "b"
Symbol.iterator



const arr = [1, 2];
for (const item of arr) console.log(item);
// Output: 1, 2
Symbol.unscopables



const unscopables = Array.prototype[Symbol.unscopables];
console.log(unscopables.includes); // Output: true
__proto__



const arr = [];
console.log(arr.__proto__ === Array.prototype); // Output: true