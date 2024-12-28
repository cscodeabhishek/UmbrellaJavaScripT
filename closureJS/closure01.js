// Closure Javascript:
// In JavaScript, functions form closures.

// A closure is the combination of a function bundled together (enclosed)with references to its surrounding state (the lexical environment).
// In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, 
// closures are created every time a function is created, at function creation time.

// Closures are often used to create data privacy, as they allow the function to access variables outside its immediate lexical scope 
// without exposing them to the global scope.
function personName(){
    function personFullName(){
        console.log(firstName,lastName);
    } return personFullName;
}
const ans = personName("Abhishek","thakur");
ans();// this is cALLED CLOSURES
