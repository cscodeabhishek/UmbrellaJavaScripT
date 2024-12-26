// const personn={
//     firstName:"thakur",
//     age:8,
//     about: function(){
//         console.log("My name is abhishek and my age is 8");
//     }
// }
// personn.about();
// // problem arise here is first i have my firstname is abhishek and again if i change this to the thakur and the output is not going to change
// // its similar as before output: My name is abhishek and my age is 8 but it should be like output: My name is thakur and my age is 8
// // Solution: To avoid this i need to define this as console.log(`my name is ${this.firstName} and age is ${this.age}`) in the method
// // So output will change as the firstname is change ,age is change with respect.
// const personn1={
//     firstName:"Harshita THakur",
//     age:8,
//     about: function(){
//         console.log(`my name is ${this.firstName} and age is ${this.age}`);
//     }
// }
// personn1.about();

// function personInfo(){
//     console.log(`my name is ${this.firstName} and age is ${this.age}`);
// }
// const personn2={
//     firstName:"Harshita THakur",
//     age:8,
//     about: personInfo
// }
// const personn3={
//     firstName:"Rijwan THakur",
//     age:18,
//     about: personInfo
// }

// const personn4={
//     firstName:"Ashraf THakur",
//     age:16,
//     about: personInfo
// }

// personInfo() // output is my name is undefined and age is undefined
// console.log(personn2); // person2.about();
// console.log(personn3); // person3.about();
// console.log(personn4); // person4.about();

// console.log(this) // output : this will give you the window object where you are many methods inbuilt in this
// console.log(window); // window object 
// console.log(this===window ); // output is true


// function myfunc(){
//     console.log(this);// output is window object
// }

// window.myfunc();

// function myfunc(){
//     "use strict"
//     console.log(this);// output is undefined
// }
// myfunc();

// // call apply bind method in javascrit

// // call method: call the function immediately and passing the argument one by one

// const myperson={
//     firstName:"abhishek",
//     age:19,
//     about: function(){
//         console.log(`my name is ${this.firstName}, and age is ${this.age}`)
//     }
// }
// const myperson2={
//     firstName:"harshita",
//     age:26
// }

// myperson.about.call(myperson2)// this is called as call mathod in Javascript here myperson2 dont have about method so I am borrowed this to the myperson for myperson2

// //apply method:call the function immediately but passing argument in the array 
// function userInfo(hobby, music){
//     console.log(`my name is ${this.firstName}, and age is ${this.age}`,hobby,music);
// }
// const myperson3={
//     firstName:"abhishek",
//     age:19,
// }
// const myperson4={
//     firstName:"harshita",
//     age:26
// }
// userInfo.apply(myperson4,["dance, let her GO"]);

// // bind : does not call the function immediately instead it creates a new function with {this} bound to be specified value.
// function userInfo(hobby, music){
//     console.log(`my name is ${this.firstName}, and age is ${this.age}`,hobby,music);
// }
// const myperson5={
//     firstName:"abhishek",
//     age:19,
// }
// const myperson6={
//     firstName:"harshita",
//     age:26
// }

// const newfun=userInfo.bind(myperson5,"guitar","last ride");
// console.log(newfun);

// //arrow fucntion dont have this
// const newPer={
//     firstName:"abhishek",
//     age:8,
//     about:()=>{
//         console.log(this); //output is window object
//         console.log(this.firstName,this.age);
//     }
// }
// newPer.about(); // output  undefined undefined // arrow function take his this from near surrounding
// newPer.about.apply(newPer); // still the output is undefined


//proto ,prototype
const person1={
    firstName:"Abhishek",
    lastName:"thakur",
    age:18,
    sex:"male",
    address:"khan market,New Delhi,110058",
    about: function(){
        console.log(`name is ${this.firstName},and age is ${this.age},and he is leaving in ${this.address}`)
    },
    is18: function(){
        return this.age>=18;
    }
}
const info =person1.about();
console.log(info);

const userMethod={
    about:function (){
        console.log(`name is ${this.firstName},and age is ${this.age},and he is leaving in ${this.address}`)
    },
    is18:function(){
        return this.age>=18;
    },
    singsong:function(){
        return "lalalalala"
    }
    
}

function createUser(firstName,lastName,age,sex,address){
    //const user={};
    const user=Object.create(userMethod);
    user.firstName=firstName;
    user.lastName=lastName;
    user.age=age;
    user.sex=sex;
    user.address=address;
    user.about=userMethod.about;
    user.is18=userMethod.is18;
    user.singsong=userMethod.singsong; //
}
const user1=createUser("Abhishek","thakur",18,"khan Market")
console.log(user1);
const is18=userMethod.is18;
console.log(is18);

function createUser(firstName,lastName,age,sex,address){
    //const user={};
    const user=Object.create(createUser.prototype);
    user.firstName=firstName;
    user.lastName=lastName;
    user.age=age;
    user.address=address;
}
createUser.prototype.about= function(){
    console.log(`name is ${this.firstName},and age is ${this.age},and he is leaving in ${this.address}`)
}
createUser.prototype.is18= function(){
  return this.age>=18;
}
createUser.prototype.singsong= function(){
   return "song"
}
const user2=createUser("Abhishek","thakur",18,"khan Market")
console.log(user1);


const obj1={
    key1: "value1",
    key2:"value2"
}
// const obj2={
//     key3:"value3",
// }
// console.log(obj2.key2);// undefined because key2 is not in obj2
// To fetch the key2 value for the obj2 you need to create empty object like this
const obj2=Object.create(obj1);
console.log(obj2.key2); //this is called proto 

// __proto__: is the getter setter for the [[prototype]] internal property.It Allows access to the prototype of an object at runtime.

const objj={ key:"value"};
console.log(objj.__proto__);// log the prototype of obj (usually object.prototype)

// [[prototype]]: is the internal hidden property of every object.It refers to the object from which the current object inherit its properties.
console.log(Object.getPrototypeOf);
const objjj={key:"value1"};
console.log(Object.getPrototypeOf(objjj));

//prototype in (function prototype)
// prototype is the property of function,specifically constructor functions,that defines the properties and method shared by all Instances created by that function
function person(name){
    this.name=name;
} 
person.prototype.greet=function(){
    console.log(`hello,my name is ${this.name}`);
};
const john = person("john");
// john.greet();
// console.log(john.__proto__===person.prototype);

// javascript function is ===> function + object
function hel(){
    console.log("hello World");
}
hel.myownProperty ="very unique property";
console.log(hel.myownProperty);
/////

function heal(){
    console.log("hello World");
}
// constructor
console.log(heal.prototype); // output : constructor : constructor function is used to create objects
// only function provide this prototype


//new keyword in javascript
function crUser(firstName,age){ // The parameters (firstName, age) are assigned to the this.firstName and this.age properties.
    this.firstName= firstName; //The this keyword inside the constructor function assigns the properties to the new object.
    this.age=age;
}
const user11= new crUser("Abhishek",19); // The new keyword creates a new instance of the crUser object.
console.log(user11);

// 1. Class Keyword
// A class is like a blueprint for creating objects (instances). It defines properties and methods that objects created from the class will have.
class User {
    constructor(firstName, age) {
        this.firstName = firstName;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.firstName} and I am ${this.age} years old.`);
    }
}

const user111 = new User("Abhishek", 25);
user111.greet();  // Output: Hello, my name is Abhishek and I am 25 years old.


// 2. Super Keyword
// The super keyword is used to call functions or constructors of the parent class. It’s helpful when you're working with inheritance.


class Person {
    constructor(name) {
        this.name = name;
    }
}

class Student extends Person {
    constructor(name, grade) {
        super(name);  // Calls the constructor of the parent class (Person)
        this.grade = grade;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name} and I am in grade ${this.grade}.`);
    }
}

const student1 = new Student("Harshita", "A");
student1.introduce();  // Output: Hi, I'm Harshita and I am in grade A.


// 3. Method Overriding
// Method overriding happens when a subclass (child class) provides its own implementation of a method that is already defined in the parent class.
class Animal {
    speak() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}

const dog = new Dog();
dog.speak();  // Output: Dog barks (Overridden method) 

// 4. Getters and Setters
// Getters are used to access the value of an object’s property, and setters are used to change the value of a property.
class Circle {
    constructor(radius) {
        this._radius = radius;  // Use an underscore to mark private properties
    }

    get radius() {
        return this._radius;
    }

    set radius(newRadius) {
        if (newRadius > 0) {
            this._radius = newRadius;
        } else {
            console.log("Radius must be positive.");
        }
    }
}

const circle = new Circle(10);
console.log(circle.radius);  // Output: 10 (using getter)
circle.radius = 5;  // Using setter
console.log(circle.radius);  // Output: 5
circle.radius = -3;  // Output: Radius must be positive.

// 5. Static Methods and Properties
// Static methods and properties belong to the class itself rather than the instances (objects) created from the class.
class MathHelper {
    static add(a, b) {
        return a + b;
    }

    static PI = 3.14;  // Static property
}

console.log(MathHelper.add(5, 3));  // Output: 8
console.log(MathHelper.PI);  // Output: 3.14

// Summary:
// Class: A blueprint for creating objects.
// Super: Used to call the parent class's methods or constructors.
// Method Overriding: A subclass redefines a method that is already defined in the parent class.
// Getters and Setters: Allow getting and setting property values in a controlled manner.
// Static Methods and Properties: Methods and properties that belong to the class itself, not to instances of the class.