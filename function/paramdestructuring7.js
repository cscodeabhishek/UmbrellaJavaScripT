// param destructuring

// object
// react

const person={
    name:"Harshita Thakur",
    gender:"Alpha male",
}
// function detail(obj){
//     console.log(obj.name);
//     console.log(obj.gender);
// }

// use destructuring here as below:
function detail({name,gender}){
    console.log(name);
    console.log(gender);
}
detail(person);