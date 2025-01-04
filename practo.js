function maxSubarr(nums){
    let maxSum = nums[0];
    let currentSum =nums[0];

    for (let i=1; i < nums.length; i++){
        currentSum = Math.max(nums[i],currentSum + nums[i]);
        maxSum= Math.max(maxSum,currentSum);
    }
    return maxSum;
}

const nums= [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubarr(nums));


// Problem Statement: Check Balanced Parentheses
// Given string str containing just the characters '(', ')', '{', '}', '[' and ']', check if the input string is valid and return true if the string is balanced otherwise return false.

// Note: string str is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:

// Input: str = “( )[ { } ( ) ]”

// Output: True

// Explanation: As every open bracket has its corresponding 
// close bracket. Match parentheses are in correct order 
// hence they are balanced.
// Example 2:

// Input: str = “[ ( )”

// Output: False

// Explanation: As ‘[‘ does not have ‘]’ hence it is 
// not valid and will return false.

// function isValidparen(str){
//     const stack = [];
//     const map ={
//         ')':'(',
//         '}':'}',
//         ']':'['
//     }
// }

// for(let char of str){

//     for(let char of str){
//         if (char in map){
//                 if(stack.length>0 && stack[stack.length-1] === map[char]){
//                     stack.pop();
//                 }else {
//                     return false;
//                 }
//             } else if(['(','{','['].includes(char)){
//                 stack.push(char);
//             }
//     }
// }
// return stack.length === 0;

// console.log(isValidparen("()"));



// function about(hobby, music){
//     console.log(this.firstName, this.age,hobby,music);
// }
// const person1={
// firstName: "Abhishek",
// age:28
// }
// const person2={
// firstName: "Abhishek",
// age:18
// }
// about.apply(person1,["dance","bandeya"]);

// const person3={
// firstName: "Abhishek",
// age:18,
// about:()=>{
//     console.log(this);
//     console.log(this.firstName,this.age)
// }
// }

// person3.about(person1);

// 1. Fetch the data from this API.  (Response of objects containing photos)
// 2. Create a function which will give me the array of these objects in some interval, 
// for eg. array of object from startIndex to lastIndex (Paginated function)
// 3. Display these photos in UI , one photo in one column and row ( Like instagram)
// 4. Implement Infinite scroll (Load 10. Photos at first load and whenever user scrolls to the last photo)

