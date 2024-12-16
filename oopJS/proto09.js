// way to create empty object in javascript
const obj1={
    key1: "value1",
    key2: "value2"
}
// const obj2={
//     key3:"value3"
// }
// console.log(obj2.key2);
// here output is undefined to change this output of javascript and fetch the key from obj1
const obj2= Object.create(obj1);
console.log(obj2.key1); // here the obj2 will access the obj1 key value pair 
console.log(obj2); 
console.log(obj2.__proto__); 
