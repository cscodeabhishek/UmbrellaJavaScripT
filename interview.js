// Javascript asked questions in coding round 2 :::::::
// Palindrome Check:
// A palindrome reads the same forwards and backward.The code reverses the string and checks if it matches the original.
//>>>>>>>>>>>>>palindrome>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("madam")); // true
// Explanation str.split('')
// Meaning: Converts the string into an array of individual characters.
// Example:
// "hello".split(''); // ['h', 'e', 'l', 'l', 'o']

// .reverse()
// Meaning: Reverses the order of elements in the array.
// Example:
// ['h', 'e', 'l', 'l', 'o'].reverse(); // ['o', 'l', 'l', 'e', 'h']

// .join('')
// Meaning: Joins the reversed array back into a single string.
// Example:
// ['o', 'l', 'l', 'e', 'h'].join(''); // "olleh"

// >>>>>>>>>>>>>Reverse a String>>>>>>>>>>>>>>>>>>>>
// Reversing a string involves iterating from the end to the beginning and appending characters to a new string.
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("hello")); // "olleh"

//>>>>>>>>>>>>>>>>>>Anagram Check>>>>>>>>>>>>>>>>>>>>
//Anagrams are words with the same characters rearranged. Sorting and comparing both strings ensures they are identical.
function isAnagram(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}
console.log(isAnagram("listen", "silent")); // true

//>>>>>>>>>>>>>>>>Factorial of a Number>>>>>>>>>>>>>>>>>>>>>>>>
// Factorial is the product of all positive integers up to a number. A recursive function multiplies n by factorial(n-1).
function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5)); // 120

//>>>>>>>>>>>>Fibonacci Series
// Each term in the Fibonacci series is the sum of the previous two. This iteratively generates the series up to n.

function fibonacci(n) {
    const series = [0, 1];
    for (let i = 2; i < n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return series;
}
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]

//Find Duplicate Numbers
// Iterate over the array and use a Set to find numbers that appear more than once.

function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = new Set();
    for (let num of arr) {
        if (seen.has(num)) duplicates.add(num);
        else seen.add(num);
    }
    return [...duplicates];
}
console.log(findDuplicates([1, 2, 3, 4, 2, 5])); // [2]

// find duplicate and count too

function findDuplicatesWithCount(arr) {
    const countMap = new Map();
    const duplicates = {};

    // Count occurrences of each number
    for (let num of arr) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    // Extract duplicates with their counts
    for (let [key, value] of countMap.entries()) {
        if (value > 1) {
            duplicates[key] = value;
        }
    }

    return duplicates;
}

console.log(findDuplicatesWithCount([1, 2, 3, 4, 2, 5, 3, 2])); 
// Output: { '2': 3, '3': 2 }

//>>>>>>>>>>>>>Merge and Sort Arrays>>>>>>>>>>>
// Concatenate both arrays and use the sort function to sort the merged array.
function merge(arr1, arr2) {
    return arr1.concat(arr2).sort((a, b) => a - b);
}
console.log(merge([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]


//>>>>>> Find Maximum and Minimum in an Array
// Use Math.max and Math.min with the spread operator to find the largest and smallest values.

function findMaxMin(arr) {
    return { max: Math.max(...arr), min: Math.min(...arr) };
}
console.log(findMaxMin([1, 2, 3, 4, 5])); // {max: 5, min: 1}



// Flatten a Nested Array
// Recursively traverse the nested array or use flat(Infinity) for deep flattening.

function flatten(arr) {
    return arr.flat(Infinity);
}
console.log(flatten([1, [2, [3, 4]]])); // [1, 2, 3, 4]


// Group Elements by Key
// Iterate through the array and group items into an object using their specified key.

function groupBy(arr, key) {
    return arr.reduce((acc, obj) => {
        const groupKey = obj[key];
        if (!acc[groupKey]) acc[groupKey] = [];
        acc[groupKey].push(obj);
        return acc;
    }, {});
}
console.log(groupBy([{ age: 25 }, { age: 30 }, { age: 25 }], 'age')); 
// {25: [{ age: 25 }, { age: 25 }], 30: [{ age: 30 }]}

// Debouncing a Function
// Debouncing delays function execution until a specified time passes after the last call.

function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

// Throttle a Function
// Throttling ensures a function executes at most once in a defined time interval.

function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function (...args) {
        const now = Date.now();
        if (!lastRan || now - lastRan >= limit) {
            func.apply(this, args);
            lastRan = now;
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                func.apply(this, args);
                lastRan = now;
            }, limit - (now - lastRan));
        }
    };
}
// Deep Clone an Object
// Use recursion or JSON.parse(JSON.stringify(obj)) for deep cloning objects.

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
const obj = { a: 1, b: { c: 2 } };
console.log(deepClone(obj)); // { a: 1, b: { c: 2 } }

// Check Balanced Parentheses
// Use a stack to ensure every opening parenthesis has a corresponding closing one.
function isBalanced(str) {
    const stack = [];
    for (let char of str) {
        if (char === '(') stack.push(char);
        else if (char === ')' && stack.pop() !== '(') return false;
    }
    return stack.length === 0;
}
console.log(isBalanced("(())")); // true

// LRU Cache Implementation
// Use a Map to store keys in the order of their usage, removing the least recently used when needed.

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }
    get(key) {
        if (!this.cache.has(key)) return -1;
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }
    put(key, value) {
        if (this.cache.has(key)) this.cache.delete(key);
        this.cache.set(key, value);
        if (this.cache.size > this.capacity) {
            this.cache.delete(this.cache.keys().next().value); // Remove LRU
        }
    }
}