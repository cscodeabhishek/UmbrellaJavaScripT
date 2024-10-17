// promise.resolve


const myPromise =promise.resolve(5);
promise.resolve(5).then(value=>{
    console.log(value);
})

// then method always return promise

// promise chaining

function chaining(){
    return new Promise((resolve ,reject)=>{
        resolve(Task);
    })
}
chaining()
.then((value)=>{
    console.log(value);
    value += bar;
    return value; // here promise is returning not value -- Internally promise.resolved returning the promise. only allowed to put then. on  promise  not in any "sting"
})
.then((value)=>{
    console.log(value);
})
