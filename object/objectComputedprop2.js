// computed properties
const key1 = "object1";
const key2 = "object2";

const val1 = "my value 1";
const val2 = "my value 2";

// const obj = {
//     key1: val1,
//     key2:val2
// }
// console.log(obj);
//output: {key1: 'my value 1', key2: 'my value 2'}

const obj = {
    [key1]: val1, // [key1] this is called as <<<computed properties>>>> via keeping the square brackets in it
    [key2]:val2
}
console.log(obj);
// {object1: 'my value 1', object2: 'my value 2'}


// other method
const object = {};
obj[key1] = val1;
obj[key2] = val2;
console.log(object);

