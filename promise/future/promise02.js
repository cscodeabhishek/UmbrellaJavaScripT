console.log("script start");
const bucket = ['coffee', 'chips', 'vegitables', 'salt','rice'];

const friedRicePromise = new Promise((resolve, reject) => {
    if (bucket.includes("vegitables") && bucket.includes("salt") && bucket.includes("rice")) {
        resolve("fried Rice");
    } else {
        reject("failed");
    }
})

// Produce the promise above

// consuming the promises
friedRicePromise.then((myfriedrice)=>{
    console.log("lets eat",myfriedrice)
}).catch((error)=>{
    console.log(error);
})

for(let i=0; i<=1; i++){
    console.log(Math.random(),i)
}

console.log("script end");


// promsie is not javascript functionality its browser fucntionality and it work perfectly Mode of Asynchronous

// By console.log("Script Start") to the start and console.log("script end") at end 
