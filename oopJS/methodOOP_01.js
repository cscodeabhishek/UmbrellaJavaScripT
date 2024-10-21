//Method: Function inside object 
const person= {
    firstName: "Abhishek Thakur",
    age: 22,
    about: function(){
        console.log(`person name is ${this.firstName} and the age is ${this.age}`);
    }
}
person.about();
// above example show the following meaning of using this keyword// Inside an object method, this refers to the object that owns the method.

// this keyword
// this keyword in Javascript is used to refer the current execution context of function where it is being invoked.  

// In the global context, this refers to the global object (window in the browser).

// Inside an object method, this refers to the object that owns the method.

// In an arrow function, this does not bind to the function itself but rather to the surrounding lexical context.

// When used inside an event listener, this refers to the element that fired the event.

// In a constructor function or class, this refers to the newly created object.

function personnInfo(){
    console.log(`person name is ${this.firstName} and the age is ${this.age}`);
}
const person1= {
    firstName: "Abhishek Thakur",
    age: 22,
    about: personnInfo
}
const person2= {
    firstName: "Garima Thakur",
    age: 22,
    about: personnInfo
}
const person3= {
    firstName: "Harshita Thakur",
    age: 22,
    about: personnInfo
}

person1.about();
person2.about();
person3.about(); // 