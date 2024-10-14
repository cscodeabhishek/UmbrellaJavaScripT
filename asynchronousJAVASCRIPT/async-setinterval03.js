//setInterval
console.log("script start");
// setInterval(()=>{
//     console.log("loop inside");
// },1000);
console.log("script start");

// random color variable change <<smalll project>>
const body = document.body;
const button = document.querySelector("button");
const setIntervalId = setInterval(()=>{
    const red =Math.floor(Math.random()*126);
    const green =Math.floor(Math.random()*126);
    const blue =Math.floor(Math.random()*126);
    const rgb = `rgb(${red},${green},${blue})`;
    body.style.background =rgb;
},1000);

button.addEventlistner("click",()=>{
    clearInterval(setIntervalId);
    button.textContent = body.style.background;
});