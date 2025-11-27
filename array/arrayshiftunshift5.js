// shift unshift
let fruits = ["apple", "banana", "orange", "watermelon"];
console.log(fruits);
// if you want to add the element from starting to the arrays used
fruits.unshift("kiwi"); 
console.log(fruits); // OP : ["kiwi","apple", "banana", "orange", "watermelon"];
fruits.shift(); //{here this will shift the fruit which is kiwi}
// console.log(fruits);
let removedFruits = fruits.shift(); // shift removed from starting element of an array
console.log("removed fruits is", removedFruits) //op= {removed fruits is apple}
