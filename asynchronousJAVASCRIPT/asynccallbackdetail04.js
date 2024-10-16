//callback
//very simple example of the callback
function myFucn(callback){
    console.log("function is doing some task");
    callback()
}

function myfunc2(){
    console.log("function is doing second task");
}

myFucn(myfunc2);

function getTwoNumber(number1,number2,callback){
    callback(number1,number2);
}
function adddTwoNumber(num1,num2){
    console.log (num1 + num2);
}

const id=getTwoNumber(4,5,adddTwoNumber);
console.log(id);

function myfucn(){
    console.log("tstsigma");
}
myfucn()

const idd = function fun(){
    console.log("script");
}

// arrow fucntion
const def =()=>{
    console.log("script");
}
