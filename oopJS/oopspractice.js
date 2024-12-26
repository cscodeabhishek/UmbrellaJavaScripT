const personn={
    firstName:"thakur",
    age:8,
    about: function(){
        console.log("My name is abhishek and my age is 8");
    }
}
personn.about();
// problem arise here is first i have my firstname is abhishek and again if i change this to the thakur and the output is not going to change
// its similar as before output: My name is abhishek and my age is 8 but it should be like output: My name is thakur and my age is 8
// Soultion: To avoid this i need to define this as console.log(`my name is ${this.firstName} and age is ${this.age}`) in the method
// So output will change as the firstname is change ,age is change with respect.
const personn1={
    firstName:"Harshita THakur",
    age:8,
    about: function(){
        console.log(`my name is ${this.firstName} and age is ${this.age}`);
    }
}
personn1.about();

function personInfo(){
    console.log(`my name is ${this.firstName} and age is ${this.age}`);
}
const personn2={
    firstName:"Harshita THakur",
    age:8,
    about: personInfo
}
const personn3={
    firstName:"Rijwan THakur",
    age:18,
    about: personInfo
}

const personn4={
    firstName:"Ashraf THakur",
    age:16,
    about: personInfo
}

personInfo() // output is my name is undefined and age is undefined
console.log(personn2); // person2.about();
console.log(personn3); // person3.about();
console.log(personn4); // person4.about();

console.log(this) // output : this will give you the window object where you are many methods inbuilt in this
console.log(window); // window object 
console.log(this===window ); // output is true


function myfunc(){
    console.log(this);// output is window object
}

window.myfunc();

function myfunc(){
    "use strict"
    console.log(this);// output is undefined
}
myfunc();

// call apply bind method in javascrit

// call method: call the function immediately and passing the argument one by one

const myperson={
    firstName:"abhishek",
    age:19,
    about: function(){
        console.log(`my name is ${this.firstName}, and age is ${this.age}`)
    }
}
const myperson2={
    firstName:"harshita",
    age:26
}

myperson.about.call(myperson2)// this is called as call mathod in Javascript here myperson2 dont have about method so I am borrowed this to the myperson for myperson2

//apply method:call the function immediately but passing argument in the array 
function userInfo(hobby, music){
    console.log(`my name is ${this.firstName}, and age is ${this.age}`,hobby,music);
}
const myperson3={
    firstName:"abhishek",
    age:19,
}
const myperson4={
    firstName:"harshita",
    age:26
}
userInfo.apply(myperson4,["dance, let her GO"]);

// bind : does not call the function immediately instead it creates a new function with {this} bound to be specified value.
function userInfo(hobby, music){
    console.log(`my name is ${this.firstName}, and age is ${this.age}`,hobby,music);
}
const myperson5={
    firstName:"abhishek",
    age:19,
}
const myperson6={
    firstName:"harshita",
    age:26
}

const newfun=userInfo.bind(myperson5,"guitar","last ride");
console.log(newfun);

//arrow fucntion dont have this
const newPer={
    firstName:"abhishek",
    age:8,
    about:()=>{
        console.log(this.firstName,this.age);
    }
}
newPer.about(); // output  undefined undefined // arrow function take his this from near surrounding














// const person1={
//     firstName:"Abhishek",
//     lastName:"thakur",
//     age:18,
//     sex:"male",
//     address:"khan market,New Delhi,110058",
//     about: function(){
//         console.log(`name is ${this.firstName},and age is ${this.age},and he is leaving in ${this.address}`)
//     },
//     is18: function(){
//         return this.age>=18;
//     }
// }
// const info =person1.about();
// console.log(info);

// const userMethod={
//     about:function (){
//         console.log(`name is ${this.firstName},and age is ${this.age},and he is leaving in ${this.address}`)
//     },
//     is18:function(){
//         return this.age>=18;
//     },
//     singsong:function(){
//         return "lalalalala"
//     }
    
// }

// function createUser(firstName,lastName,age,sex,address){
//     //const user={};
//     const user=Object.create(userMethod);
//     user.firstName=firstName;
//     user.lastName=lastName;
//     user.age=age;
//     user.address=address;
//     user.about=userMethod.about;
//     user.is18=userMethod.is18;
//     user.singsong=userMethod.singsong; //
// }
// const user1=createUser("Abhishek","thakur",18,"khan Market")
// console.log(user1);

// function createUser(firstName,lastName,age,sex,address){
//     //const user={};
//     const user=Object.create(createUser.prototype);
//     user.firstName=firstName;
//     user.lastName=lastName;
//     user.age=age;
//     user.address=address;
// }
// createUser.prototype.about= function(){
//     console.log(`name is ${this.firstName},and age is ${this.age},and he is leaving in ${this.address}`)
// }
// createUser.prototype.is18= function(){
//   return this.age>=18;
// }
// createUser.prototype.singsong= function(){
//    return "song"
// }
// const user2=createUser("Abhishek","thakur",18,"khan Market")
// console.log(user1);