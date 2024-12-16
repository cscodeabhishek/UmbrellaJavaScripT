function hello(){
    console.log("hello World");
}
// // In javascript function is function===> but you can treat them as like Object also.....

//write your own property in javascript
hello.myOwnProperty ="very unique value";
console.log(hello.myOwnProperty);

// only function provide prototype property
hello.prototype.abc="abc";
hello.prototype.xyz="xyz";
hello.prototype.sing= function(){
    return "songggg"
}
console.log(hello.prototype.sing());