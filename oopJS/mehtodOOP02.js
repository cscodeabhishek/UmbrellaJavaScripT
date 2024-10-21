console.log(this)
console.log(window)

function objectingCheck(){
    "use strict" // because of this output change from window object to the "Undefined"
    console.log(this);
}
objectingCheck()
// output is // In the global context, this refers to the global object (window in the browser).