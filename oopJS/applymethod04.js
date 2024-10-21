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

applyMethod.apply(user1,["guitar", "bike race"]); // when used apply method pass tthe argument in [] array like list