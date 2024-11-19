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
