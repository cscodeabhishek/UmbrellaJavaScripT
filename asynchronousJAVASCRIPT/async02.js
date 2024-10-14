//set timeout
console.log("harshita Javascript Developer");
const ID = setTimeout(()=>{
console.log("inside timeout");
},1000);

for(let i=0;i<100;i++){
    console.log("loop checking");
}
console.log("settimeout is", ID);
console.log("clearing timeout");
clearTimeout(ID); // this clearout is not getting to get executed the settimeout arrow function
console.log("now execute the settimeout");