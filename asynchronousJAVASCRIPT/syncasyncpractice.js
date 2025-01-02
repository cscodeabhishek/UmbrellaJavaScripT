//synchronous js
console.log("script start");
const id= setTimeout(()=>{
    console.log("setTimeout is executed")
    for(let i=0;i<100;i++);
},1000)
console.log("setTimeout Id is",id);
console.log(id);
clearInterval(id);/// via this setTimeout function is not going to call in future
// Basically javascript setTimeout is provided by web api not by javascript

console.log("script end");

//setTimeout: // setInterval
const intervalID=setInterval(()=>{
    console.log("stay Humble");
},2000)

setTimeout(() => {
    clearInterval(intervalID);
}, 10000);