// An arrow function is a more concise way to write functions in JavaScript, introduced in ES6 (ECMAScript 2015). 
// Arrow functions use the => syntax and have some key differences from regular functions, particularly in how they handle the this keyword.
// normal function
function GTAPlayer(){
    console.log("thakur plays GTA6 game in his Laptop");
}
// arrow fucntion
const GTAPlayerr = () => {
    console.log("thakur plays GTA6 game in his Laptop");
}

// normal function == Fucntion declaration
function singHappyBirthday(){
    console.log("happy birthday harshita thakur");
}
 singHappyBirthday()

// function expression
const singHappyBirthdayy = function(){
    console.log("happy birthday harshita thakur");
}
singHappyBirthdayy()

// arrow function 
const singHappyBirthdayyy =() =>{
    console.log("Happy Birthday Harshita thakur")
}
singHappyBirthdayyy()

// Summary of Differences:
// 1.)Function Declaration: Hoisted, can be called before its definition.
// 2.)Function Expression: Not hoisted, must be called after it's assigned to a variable.
// 3.)Arrow Function: More concise, no this binding, and not hoisted like function expressions.
const firstChar =(anystring) => anystring[0];
console.log(firstChar("abhishek"));