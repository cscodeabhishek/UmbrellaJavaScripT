// function hello(){
//     console.log("hello World");
// }
// // In javascript function is function===> but you can treat them as like Object also.....

const obj=Object.freeze({
    name:"alice",
    info:{
        age:25
    }
});
try{
    obj.name="Bob",
    obj.info.age=30;
}catch(e){
    console.log("error:",e.message);
}
console.log(obj.name,obj.info.age);