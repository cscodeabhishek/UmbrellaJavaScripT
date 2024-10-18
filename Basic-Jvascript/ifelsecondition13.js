// if else
let age = 19;
if (age > 18) {
    console.log("user can give vote");
} else {
    console.log("user can not Vote");
}

let number = 17;
if (number % 2 === 0) {
    console.log("number is even");
    
} else {
    console.log("number is odd")
    
}
// falsy value

// false
// ""
// null
// undefined
// 0
let nameVar = false; // here you can give "", null, if you not defined nameVar, if you give 0,then it will print else condition only why because of javscritp falsy value

if (nameVar) {
    console.log("nameVar");
    
} else {
    console.log("no naming printing");
    
}

//truthy value
// -1, 1
// "abc"
let truthVar = -1;
if (truthVar) {
    console.log("nameVar");
    
} else {
    console.log("no naming printing");
    
}