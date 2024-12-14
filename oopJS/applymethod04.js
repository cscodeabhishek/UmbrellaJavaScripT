function applyMethod(music , hobbies){
    console.log(this.firstName, this.age, music, hobbies)
}
const user1={
    firstName: "abhishek",
    age: 8,
}
const user2={
    firstName: "Rohit",
    age: 98,
}

applyMethod.apply(user1,["guitar", "bike race"]); // when used apply method pass the argument in [] array like list