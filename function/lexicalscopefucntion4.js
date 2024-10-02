// lexical scope in javascript
//Definition: Lexical Scope in JavaScript refers to the way the scope of a variable is determined by its position in the code (where it is written), 
// not by how or where it is called. In simpler terms, where you define your variables and functions in the code matters.

// Think of it like this:
// Imagine you’re in a house. The rooms you can access depend on where you’re standing, and the doors are like your functions.
// If you're in a specific room (scope), you can see everything in that room and any rooms (scopes) outside of it, but not what's
// inside rooms that are deeper inside until you go through those doors.


function myApp(){
    const myVar = "value1";
    function myFunc(){}
    const myfunc = function(){}
    const myfunc2 =()=>{}
    console.log(myVar);
}
myApp()