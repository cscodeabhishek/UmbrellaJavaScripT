// filter method in Javascript Language
// The filter method in JavaScript is used to create a new array containing all elements of an original array that pass a certain condition
// defined by a callback function.It doesn’t modify the original array.

const numbers =[1,2,3,4,5,6];
const isEven = function(number){
    return number%2==0; // here it will always return the boolean value 
}
const newArray=numbers.filter(isEven);
console.log(newArray);

// odd number by filter method
const numberss=[1,2,3,4,5];
const isOdd=function(number){
    return number%2!==0; // here it will always return the boolean value
}
const isOddArray=numberss.filter(isOdd) // this is your callback fucntion which is callinf the isOdd fucntin and executing the instruction inside the function expression
console.log(isOddArray);


// by arrow function
const num=[2,8,10,12,11,13,16];
const isEvenn =num.filter((numb)=>{
    return numb%2===0;
});
console.log(isEvenn)


const numb=[1,2,43,22,34,54];
const isODD =numb.filter((number)=>{
    return number%2!==0;
});
console.log(isODD);