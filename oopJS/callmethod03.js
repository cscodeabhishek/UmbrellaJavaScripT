// In JavaScript, functions are first-class citizens, meaning they can be treated like objects. 
// The call, apply, and bind methods allow you to control the value of this in a function.

// call: Calls the function immediately, passing arguments one by one.

// apply: Calls the function immediately, passing arguments as an array.

// bind: Does not call the function immediately. Instead, it creates a new function with this bound to the specified value.

const user1 = {
    firtsName: "abhishek",
    age: 18,
    about: function(){
    console.log(this.firtsName, this.age) // you can also declared this out of user1 object 
    }
}
const user2 = {
    firtsName: "Rohit",
    age: 19,
}

user1.about.call(user2); // call method : extracting the about (method) for user2 from user1