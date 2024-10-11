//clone array

// concate array
let array1 = ['item1', 'item2'];
// let array2 = ['item1', 'item2'];
// but if we have lots of data value in the array then above method is not good practice to do this.

// for this follow the other methods which is slice method
let array2 = array1.slice(0);
// method2
let array3 = [].concat(array1);

// method 3
//new way : use spread operator
let array4= [...array1];
array1.push('item3');
console.log(array1 === array2); // output false
console.log(array1 === array3); // output false <two arrays are created in the heap>
console.log(array1 === array4);// false
console.log(array1);
console.log(array2);

let array5 = array1.slice(0).concat(['item4', 'item5', 'item6'])
console.log(array5);

