// Iterable
// set
// maps
// object.assign
// optional chaining

// Iterable
// for of loop
// string and array are iterble

const firstName="HARSHITA THAKUR";
for(let char of firstName){
    console.log(char);
} 
//op
// iterable01.js:11 H
// iterable01.js:11 A
// iterable01.js:11 R
// iterable01.js:11 S
// iterable01.js:11 H
// iterable01.js:11 I
// iterable01.js:11 T
// iterable01.js:11 A
// iterable01.js:11  
// iterable01.js:11 T
// iterable01.js:11 H
// iterable01.js:11 A
// iterable01.js:11 K
// iterable01.js:11 U
// iterable01.js:11 R

//array is also Iterable
const items=["item1","item2","item3","item4"]
for(let item of items){
    console.log(item);
}
//object is not iterable
// const objects={"key1":"value1","key2":"value1",}
// for(let object of objects){
//     console.log(objects)
// }
//op iterable01.js:39 Uncaught TypeError: objects is not iterable at iterable01.js:39:19


// what is array like object?
// having length property and we can access them from index. example is String
const firstNamee="HARSHITAA";
console.log(firstNamee.length)
console.log(firstNamee[0]) // op: H
//op is 9

