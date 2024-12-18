// //>>>>>>>>>>>>>new keyword:
// Imagine you are creating a new copy of a house from a blueprint. 
// The new keyword is like saying, "Build me a new house based on this blueprint (class or function)." 
// It creates an object from a class or a constructor function.

// //>>>>>>>>>>>>>class keyword:
// A class is like a blueprint for creating houses. 
// It tells you how to build the house, what rooms it will have, and what it can do. 
// In JavaScript, the class keyword helps define this blueprint to create objects.

// //>>>>>>>>>>>>>>>>>>super keyword:
// Think of a super-parent who gives some features to their child. 
// The super keyword is used in a class to call and use methods or properties from its parent class.

// //>>>>>>>>>>>>>>>>>>JavaScript Definitions
// //>>>>>>>>>>>>>>>>>>new keyword:
// The new keyword is used to create an instance of a user-defined object type or a class. 
// It sets up a prototype chain and initializes the instance with the constructor method.

// //>>>>>>>>>>>>>>>>>>class keyword:
// The class keyword is used to define a class in JavaScript, which can contain properties and methods to create objects.
// It's syntactic sugar over JavaScript's prototype-based inheritance.

// //>>>>>>>>>>>>>>>>>>super keyword:
// The super keyword is used inside a derived class to call the constructor or methods of its parent class. 
// It must be called before accessing this in the child class's constructor.

// Examples
// new Keyword
// Example 1:
function Car(model) {
  this.model = model;
}

const myCar = new Car("Toyota");
console.log(myCar.model); // Output: Toyota

//Example 2:
class Bike {
  constructor(brand) {
    this.brand = brand;
  }
}

const myBike = new Bike("Honda");
console.log(myBike.brand); // Output: Honda

//class Keyword
//Example 1:
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return `${this.name} makes a sound.`;
  }
}

const dog = new Animal("Dog");
console.log(dog.speak()); // Output: Dog makes a sound.
//Example 2:
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.getArea()); // Output: 50
//super Keyword
//Example 1:
class Parent {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, ${this.name}!`;
  }
}

class Child extends Parent {
  greet() {
    return super.greet() + " Welcome to the family!";
  }
}

const child = new Child("Alice");
console.log(child.greet()); // Output: Hello, Alice! Welcome to the family!
//Example 2:
class Vehicle {
  constructor(type) {
    this.type = type;
  }
}

class Car extends Vehicle {
  constructor(type, brand) {
    super(type); // Call parent constructor
    this.brand = brand;
  }

  getDetails() {
    return `${this.brand} is a type of ${this.type}.`;
  }
}

const myCar = new Car("Sedan", "Toyota");
console.log(myCar.getDetails()); // Output: Toyota is a type of Sedan.

//Common Example Using new, class, and super

class Vehicle {
  constructor(type) {
    this.type = type;
  }

  getType() {
    return `This is a ${this.type}.`;
  }
}

class Car extends Vehicle {
  constructor(type, brand) {
    super(type); // Call the parent class constructor
    this.brand = brand;
  }

  getDetails() {
    return `${super.getType()} Brand: ${this.brand}.`;
  }
}

const myCar = new Car("Car", "Honda"); // Using `new` to create an object
console.log(myCar.getDetails()); 
// Output: This is a Car. Brand: Honda.






