function singHappybirthday(){
    console.log("happy birthday");
}
console.log("happy birthday");

//function in JavaScript /////////////
// A Javascript is the function of block of code designed to perform a Particular task ///
// A Javascript fucntion is executed when "something" invokes it (calls it).
/*
function singhappybirthday(){
    console.log("happy birthday to you");
}
function twoplusfour(){
    console.log(2+4);
}

// singhappybirthday()
// twoplusfour()

let newPlus = twoplusfour();
console.log(newPlus);

////
// Fucntion is always in the form of repeatable 

//Declaration: Function can be declared in the form where one is keyword and other is your fucntion name and
//after you can decrlaration the fucntionname()
// fucntion can be call after you can declared the same.
// if you declared the function first and calling it above in the code somewehere else it will give the result()


function sumoftwonumber(number1,number2){
    return number1+number2;
}
const returnedValue =sumoftwonumber(4,5);
console.log(returnedValue);

function isEven(number){
    if(number % 2 === 0){
        return true
    }else{
        return false
    }
    
}
console.log(isEven(12))

function isOdd(number){
    if(number % 2 === 1){
        return true
    }else{
        return false
    }
    
}
console.log(isOdd(6))

// print the first character of the string //

function firstChar(any){
    return any[0];
}
console.log(firstChar("raj"));


function findTarget(array,target){
    for(i=0;i<array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray = [1,2,3,4,5];
const ans= findTarget(myArray,4);
console.log(ans);

////


///arrow function
// just to remove the fucntion and wrote => and this is your arrow fucntion
////


const app = ()=>{
    const add = ()=>{
        console.log("hello add");
    }
    const sumoftwonumber=(num1,num2) =>{
        return num1+num2;
    }
    const mul=(num1,num2)=>{
        return num1*num2;
    }
    console.log("hello world in JavaScript");
    add()
    console.log(sumoftwonumber(4,4))
    console.log(mul(6,8))
}
app()

// lexical scope//
// block scope vs fucntion scope
// let and const are block scope
// var is fucntion //

{
    var firstName=("Abhishek Thakur");
}
console.log(firstName);
// error: let and const can be access only with in thier varibale block
*/
// function addTw0(num1,num2){
//     if(typeof num2==="undefined"){
//         num2= 1;
//     }
//     return num1+num2;
// }
// const ans=addTw0(4);
// console.log(ans); 
// after ES6 2015 came into the picture//
// New Approach: Here you can initialize this on the 
// function addTw0(num1,num2=8){
//     return num1+num2;
// }
// const ans=addTw0(4);
// console.log(ans); 



{/* <div data-controller="lazyplay" class="u-relative u-maxw-11 u-mx-auto u-hidden md:u-block" style="max-width:1024px;max-height:620px;">
<video preload="none" loop="" playsinline="" muted="" src="/livechat-channels.22ffb37b09dc98a076bee34058689ef02da40ee00af6712288b01281e6140c6c.mp4" width="1024" height="620" style="--aspect-ratio: 1024/620;" title="Omnichanel live chat diagram" data-lazyplay-target="video" poster="/livechat-channels.5f56bad9e01622a593ec23967d690cfbe02b46ee29fa158a9d4ac84ccf7e0212.jpg"></video>
      
<img src=".../javascript" loading="lazy" width="1024" height="620" data-lazyplay-target="poster" style="position:absolute;top:0;left:0;width:100%;" data-action="click->lazyplay#play" hidden="">
</div> */}

// Rest fucntion:
// The rest parameter ... allows a function to retreat an indefinate number of arguments as an array:
// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }
// myFunc(1,2,3,4,5,6,7,8);

// Rest function to add the two number ;
// function myfunc(...numbers){
//     console.log(numbers);
//     console.log(Array.isArray(numbers));
// }
// myfunc(1,2,3,4);

//   function addAll(...numbers){
//     let total=0;
//     for(let number of numbers){
//         total=total+number;
//     }
//     return total;
//   }
//   const ans = addAll(5,5,5,5,5);
//   console.log(ans);

  // By adding the data in the form of two variables.

  //Param Destructuring ...........//
  
  /*const person={
    name: "Abhishek Thakur",
    gender:"male",
    age:25,
  }
  function printDetails({name,gender,age}){
    console.log(name)
    console.log(age)
    console.log(age);
  }
  printDetails(person);

// This method is mostly used in the react application...........///


/// call back can be used in the Asynchronous //////
 function myfunc(name){
    console.log("hello thakur")
    console.log(`your name is ${"Thakur"}`);

}
function myFunc(callback){
    console.log("hello there I am func and I can ...")
    callback();
}
myFunc(myfunc);



/// File: Function returning function.........////
function myfunc(){
    function hello(){
        console.log(myfunc);
    }
    return "name: abhishek,age:25";
}
const ans=myfunc();
console.log(ans);
<><><><><><><><><><><><><><><><><><>

function myFunc(){
    function hello(){
        return "hello world"
    }
    return hello;
}
const ans=myFunc();
console.log(ans());

// this is fucntion returning function  ///////

///filter method:
//filter return a new array of filter element that meets a certain  condition.
//The filter() method creates a new array with all elements that pass the test implemeneted by the provided
///
This is filter method
const word=['spark','love','text','chatting','reading','working'];
const result= word.filter(word =>word.length>6);
console.log(result)