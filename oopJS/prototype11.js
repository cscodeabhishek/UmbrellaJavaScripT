// const userMethod={
//     about:function(){
//         return `${this.firstName},${this.lastName},${this.age} years old`;
//     },
//     is18:function(){
//         return this.age>=19;
//     },
//     sing: function(){
//         return "songgg"
//     }
// }

function user1(firstName,lastName,age,email,address){
    // const ust ={};  instead of this we we will create the another object as below
    // const ust= Object.create(userMethod)// it will set the prototype method value but we create the prototype in function. so it will give you error.
    const ust =Object.create(user1.prototype);
    ust.firstName = firstName;
    ust.lastName = lastName;
    ust.email = email;
    ust.age = age;
    ust.address =address;
    return ust;
}
// function provide free space so we can add the prototype here
user1.prototype.about= function(){
    return `${this.firstName},${this.lastName},${this.age} years old`;
}
user1.prototype.is18= function(){
    return this.age>=18;
}
user1.prototype.sing= function(){
    return "songggggggggggggggggg"
}
console.log(user1.prototype);
const userin = user1("Abhishek","thakur","harshi@gmail.com",25,"Mandi White House");
