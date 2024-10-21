const user1={
    firtsName: "abhishek",
    age: 8,
    about: function(){
        console.log(this.firtsName, this.age) // you can also declared this out of user1 object 
    }
}
const user2={
    firtsName: "Rohit",
    age: 98,
}

user1.about.call(user2); // call method : extracting the about (method) for user2 from user1