//Map in javascript

// key value pair
const person = new Map();
person.set("firstName","Thakur");
person.set("age",7);
person.set(1,"one");
console.log(person);
console.log(person.get("firstName"));
for(let key of person.keys()){
    console.log(key, typeof key);
}

//cloning using object.assign
const obj={
    key1:"val1",
    key2:"val2"
}
// const obj2 = obj; // had same to same value in the obj2 =obj
const obj2 ={...obj} // cloning here
obj2.key3="valuee3"
console.log(obj);
console.log(obj2);