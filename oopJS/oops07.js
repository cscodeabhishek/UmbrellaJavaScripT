// proto,prototype,class
// const user ={
//     firstName: "Harshita",
//     lastName: "thakur",
//     email: "harshita1998@gmail.com",
//     age: 25,
//     address: "Mandi House New Delhi",
//     about: function(){
//         return `${this.firstName},${this.age},${this.address}`;
//     },
//     is18: function(){
//         return this.age>=18;
//     }
// }
// const info = user.about();
// console.log(info);

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
const userin = user1("harshita","thakur","harshi@gmail.com",25,"Mandi House");
console.log(userin);
const userAge = ust.is18();
console.log(userAge);