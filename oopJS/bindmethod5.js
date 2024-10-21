function applyMethod(music , hobbies){
    console.log(this.firtsName, this.age, music, hobbies)
}
const user1={
    firtsName: "abhishek",
    age: 8,
}
const user2={
    firtsName: "Rohit",
    age: 98,
}

const func = applyMethod.bind(user1,"guitar", "bike race"); // bind method return the function
console.log(func);