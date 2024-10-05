// Reduce method in JS
// The reduce() method is like a machine that takes all the pieces of an array, one by one, and combines them into a single value. 
// Imagine you have a pile of coins and you want to add them all together into one stack. 
// The reduce() method helps you do that by taking one coin at a time and adding it to the stack until no coins are left.
// The reduce() method in JavaScript executes a reducer function on each element of the array, resulting in a single output value. 
// The reducer function takes four arguments:

//1.)Accumulator: The value returned after each iteration.
//2.)Current Value: The value of the current array element.
//3.)Current Index (Optional): The index of the current element.
//4.)Source Array (Optional): The array on which reduce() is being applied.

const numbers=[1,2,3,4,5,56];
const sumALL =numbers.reduce((accumulator ,currentValue )=>{
    return accumulator + currentValue
});
// other way is like
// const sumAll = numbers.reduce((accumulator,curentvalue) => accumulator + curentvalue, 0);
// console.log(sumAll); 
console.log(sumALL);

//     accumulator   currentValue    return
// -->  1              2              3     // here the return value is 3 and for the very next step the accumulator value is assigned as so [3] 
// -->  3              3              6    // same as above the accumator value is now 6
// -->  6              4              10  //  accumulator value is now 10
// -->  10             5              15 //   accumulator value is now 15
// -->  15             56             71 //  and finally the sumAll is  71 
// like ths the reduce method is working

// 2nd example using arrow function for this

const numberss = [1, 2, 3, 4];
const total = numberss.reduce((acc, num) => acc + num, 0);
console.log(total); // 10


// Find the longest string:
const words = ['apple', 'banana', 'cherry'];
const longest = words.reduce((acc, word) => (word.length > acc.length ? word : acc), '');
console.log(longest); // 'banana'

// Count occurrences of each letter:
const letters = ['a', 'b', 'a', 'c', 'b'];
const count = letters.reduce((acc, letter) => {
    acc[letter] = (acc[letter] || 0) + 1;
    return acc;
  }, {});
  console.log(count); // { a: 2, b: 2, c: 1 }


//leetcode problem for this:
// Given an array of integers, your task is to find the sum of minimum values from all possible subarrays of the array.
  
function sumOfSubarrayMinimums(arr) {
    let totalSum = 0; // Initialize a variable to store the total sum
  
    // Outer loop: Start from each element in the array
    for (let i = 0; i < arr.length; i++) {
      let currentMin = arr[i]; // Assume the current element is the minimum
  
      // Inner loop: Create subarrays starting from the current element We want j to start at the same position as i so that each subarray begins with the element at index i.
      for (let j = i; j < arr.length; j++) { // j=i why ? because we want the
        // Update the current minimum if a smaller number is found
        currentMin = Math.min(currentMin, arr[j]); // Math.min is used here to store the current minimum value
        // Add the current minimum to the total sum
        totalSum += currentMin;
      }
    }
  
    return totalSum; // Return the sum of all minimum values
  }
  
  // Test the function with the given input
  const array2 = [3, 1, 2, 4];
  const result = sumOfSubarrayMinimums(array);
  console.log(result); // Output: 17
  

  
const shopingCart =[
  {productName: "AppleLaptop", productPrice:12000},
  {productName: "DellLaptop", productPrice:12000},
  {productName: "LenovoLaptop", productPrice:12000},
  {productName: "ASuSLaptop", productPrice:12000},
]
 const totalAmount = shopingCart.reduce((prodPrice, curentPrice)=>{
  return prodPrice + curentPrice.productPrice
 },0);
 console.log(totalAmount);