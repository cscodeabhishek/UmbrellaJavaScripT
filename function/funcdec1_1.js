function singHappyBirthday(){
    console.log("happy Birthday");
}
function AddTwoNumber(num1,num2){
    return num1 + num2 ;
}
const returnedNum =AddTwoNumber(2,4);
console.log(returnedNum);
console.log(undefined +undefined); // output is NaN=not a number

// function for odd and input
function checkNumberOddEven(num){
    if(num%2===0){
        console.log("number is Even");
    }else{
        console.log("Number is odd")
    }
}
checkNumberOddEven(50);
// We can used here ternary oprator too for better readibility
function checkNumberOddEvenn(num){
    console.log(num % 2=== 0 ? "Number is Even":"Number is Odd");
}
checkNumberOddEvenn(7)

// function returnedString(string){
//     return string[0];
// }
// console.log(returnedString("789"));

function  indexofTargetArray(array,target){
    for(let i=0; i<array.length; i++){
        if(array[i]=== target){
            return i;
        }
    }
    return -1;
}
const myArray =[1,2,3,7,98,32,12]
const ans = indexofTargetArray(myArray, 8)
console.log(ans);

// function expression
// A function is assigned to a variable. The function may be anonymous (without a name) or named.
// Hoisting: Function expressions are not hoisted. You cannot call the function before it is assigned to the variable.

const greet = function() {
    console.log("Hello, World!");
};

greet(); // Output: "Hello, World!"

