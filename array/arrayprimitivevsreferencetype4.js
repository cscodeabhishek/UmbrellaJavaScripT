//primitive and reference data types

let num1 = (6);
let num2 = (num1);
console.log(num1);
console.log(num2);
console.log("after incrementing")
num1++;
console.log(num1);
console.log(num2);

// refernce data type
let array1 = ['item1', 'itme2'];
let array2 = (array1);
console.log(array1);
console.log(array2);
console.log("after push the element");
array1.push = ('item3');
console.log(array1);
console.log(array2);