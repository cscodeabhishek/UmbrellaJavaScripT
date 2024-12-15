//New keyword
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