// Spread operator in javaScript <<[Array case]>>
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const newArray = [...array1,...array2 ];// op 1,2,3,4,5,6
console.log(newArray);

const newArray2 = [...'abc']; // string in array is iterable 
console.log(newArray2);


// spread operator in [object case]  >>>>
const obj1={
    key1:"value1",
    key2:"value2",
}
const obj2={ 
    key3:"value3",
    key4:"value4",
}
const newObject = { ...obj1, ...obj2, key69:"value69"};
console.log(newObject);

