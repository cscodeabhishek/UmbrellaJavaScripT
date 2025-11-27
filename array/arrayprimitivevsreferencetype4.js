//primitive and reference data types

let num1 = (6);
let num2 = (num1);
console.log(num1); // op = 6
console.log(num2); // op = 6
console.log("after incrementing")
num1++;
console.log(num1); // output : 7
console.log(num2); // output : 6 by primitive data type it will keep the num2 array as 6 only

// refernce data type
let array1 = ['item1', 'itme2'];
let array2 = (array1);
console.log(array1); // op = ['item1', 'itme2'];
console.log(array2); // op = ['item1', 'itme2'];
console.log("after push the element");
array1.push = ('item3');
console.log(array1); // op: ['item1', 'itme2','item3'];
console.log(array2); // op: ['item1', 'itme2','item3']; by taking reference the output of array2 also got chnages 