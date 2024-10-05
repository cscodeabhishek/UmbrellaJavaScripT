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

