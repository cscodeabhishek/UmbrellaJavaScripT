function addTwoNumber(a,b){ // passing a and b here as parameter
    // before ES6 @ 2015 we can assigned this as defualt value like this
    if(typeof b==="undefined"){
        b=1;
    }
    return a+b; // returning here the parameter that is passed
}
const ans= addTwoNumber(6,1); // passing arguments a and b here which is 6,9
console.log(ans); 

// ES6 2015 update 
function addTwoNumber(a,b=0){ // passing a and b here as parameter / here js alowing you to set the value b as 0 if you are not passing the value of b then it will
    // take 0 other else if you are passing the argument b also it will take tha only for basic operation that you are doing
    return a+b; // returning here the parameter that is passed
}
const anss= addTwoNumber(6); // passing arguments a here as 6 but not b . So it will take the value of parameter which is defined in the defualt parameter 0
console.log(anss); 