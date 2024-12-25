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
    user.address=address;
    user.about=userMethod.about;
    user.is18=userMethod.is18;
    user.singsong=userMethod.singsong; //
}
const user1=createUser("Abhishek","thakur",18,"khan Market")
console.log(user1);

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