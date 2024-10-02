// callback function in js
// function myfucn1(a){
// console.log(a);
// console.log("thakur is here with YOU")
// };
// myfucn1([1,2,3]) // op: in array 1,2,3
// myfucn1("thakur") // op: in array 1,2,3
// myfucn1([1,2,3]) // op: in array 1,2,3


//callback here is

function myfunc2(name){
    console.log("inside my func2");
    console.log(`your name is ${name} `);
}
function myfucn1(callback){
    console.log("abhishek is doing nodejs now");
    callback("harshita");
}

myfucn1(myfunc2); // this is called as callback function