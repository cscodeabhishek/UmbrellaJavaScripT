//Q1) Write a JavaScript function to calculate the sum of two numbers
const sumTwoNumber = function(a,b){
    return a+b;
}
 const resultdd=(sumTwoNumber(5,6));
 console.log(resultdd);


// Q2 To find the maximum number in the array

const array =[1,2,4,5];
const maxNumber= Math.max(...array);
console.log(maxNumber);

// reduce method
const array1 = [1, 2, 4, 5];
const maxNumbers = array1.reduce((max, current) => (current > max ? current : max), array[0]);
//If current > max, then current becomes the new maximum (max is updated to current).
// If current <= max, the max remains unchanged.
console.log(maxNumbers);  // Output: 5


// Q3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 
function palindrome(str){
    return str===str.split('').reverse().join('');
}
console.log(palindrome("thakur"));

//1.) Reverse a String------------------->
function reverseString(str){
    return str.split('').reverse().join('');
}
console.log(reverseString("hello"));


// 2.) Palindrome Check
function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

console.log(isPalindrome("racecar"));  // Output: true
console.log(isPalindrome("hello"));    // Output: false

// 3.)Anagram check

function areAnagrams(str1, str2) {
    const formatString = (str) => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    return formatString(str1) === formatString(str2);
}

console.log(areAnagrams("listen", "silent"));  // Output: true
console.log(areAnagrams("hello", "world"));    // Output: false

//4.) Find the Maximum Number in an Array

function findMax(arr) {
    return Math.max(...arr);
}

console.log(findMax([10, 20, 30, 40, 50]));  // Output: 50

// 5.)
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 3, 3, 4, 5, 5]));  // Output: [1, 2, 3, 4, 5]


function reverseString(str) {
    let reversed = ''; // Initialize an empty string to hold the reversed result
    for (let i = str.length - 1; i >= 0; i--) { // Loop through the string from the end to the beginning
        reversed += str[i]; // Concatenate each character to the reversed string
    }
    return reversed; // Return the reversed string
}

// Example usage
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"

