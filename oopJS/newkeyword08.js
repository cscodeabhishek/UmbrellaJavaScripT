function user1(firstName,lastName,age,email,address){
    const ust ={};
    ust.firstName = firstName;
    ust.lastName = lastName;
    ust.email = email;
    ust.age = age;
    ust.address =address;
    ust.about =function(){
        return `${this.firstName},${this.lastName},${this.age} years old`;
    };
    ust.is18 =function(){
        return this.age>=19;
    }
    return ust;
}
const userin = user1("Abhishek","thakur","harshi@gmail.com",25,"Mandi White House");
console.log(userin);
const userAge = ust.is18();
console.log(userAge);

// new keyword
// The new keyword in JavaScript is used to create an object from a constructor function. 
// It allows us to make multiple instances of an object that share the same properties and methods defined in the constructor.

// For example:

// Think of a constructor function as a blueprint (like for building houses).
// Using new, you create individual houses (objects) based on the same blueprint.

// The new keyword performs the following steps when creating an object:

// Creates a new empty object {}.
// Links the object to a prototype ([[Prototype]] property of the object points to the constructor function's prototype).
// Binds the this keyword inside the constructor function to the new object.
// Executes the constructor function with the given arguments.
// If the constructor doesn't explicitly return an object, the new object is returned.
// Syntax:
let objectName = new ConstructorFunction(arguments);

example:
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  let person1 = new Person("Abhishek", 25);
  let person2 = new Person("Ananya", 23);
  
  console.log(person1.name); // Output: Abhishek
  console.log(person2.age);  // Output: 23
  
