const users = [
    { user1: "abhishek",age:"22"},
    { user2: "thakur", task:"front-end" },
]

// const [user1, user2] = users;
// console.log(user1);
const [{ age },{ task }] = users;
console.log(age);
console.log(task);