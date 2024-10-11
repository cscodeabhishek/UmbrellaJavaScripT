// for loop in array
let fruits = ['apple', 'banana', 'kiwi']
console.log(fruits.length);
console.log(fruits[fruits.length - 1]);// output kiwi
console.log(fruits[fruits.length - 2]);// output banana

for (let i = 0; i <fruits.length; i++){
    console.log(fruits[i]); // apple banana kiwi
    console.log(fruits[i].toUpperCase()); // capital letter outPut is in the uppercase: APPLE BANANA KIWI
}
