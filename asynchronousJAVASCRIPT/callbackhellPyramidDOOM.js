const heading1= document.querySelector(".heading1");
const heading2= document.querySelector(".heading2");
const heading3= document.querySelector(".heading3");
const heading4= document.querySelector(".heading4");
const heading5= document.querySelector(".heading5");
const heading6= document.querySelector(".heading6");
const heading7= document.querySelector(".heading7");

setTimeout(() => {
  heading1.textContent="One";
  heading1.style.color="pink";  
    setTimeout(()=>{
        heading3.textContent="two";
        heading3.style.color="red";
    },2000);
    setTimeout(()=>{
        heading4.textContent="three";
        heading4.style.color="blue";
    },1000);
    setTimeout(()=>{
        heading5.textContent="four";
        heading5.style.color="yellow";
    },2000);
    setTimeout(()=>{
        heading6.textContent="five";
        heading6.style.color="green";
    },1000);
    setTimeout(()=>{
        heading7.textContent="six";
        heading7.style.color="grey";
    },2000);
    setTimeout(()=>{
        heading2.textContent="seven";
        heading2.style.color="grey";
    },2000);
},1000);



//pyramid DOOM
function pyramid(element,text,color,time){
    setTimeout(() => {
       element.textContent="text";
       element.style.color="color" 
    }, timeout);

}

