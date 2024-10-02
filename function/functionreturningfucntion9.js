// function returning function
function myfucn1(){
 function hello(){
    console.log("hello there");
 }
 return hello;
}
const ans = myfucn1();
console.log(ans); // instead of this you can write ans as fucntion  as below
ans(); //output is hello