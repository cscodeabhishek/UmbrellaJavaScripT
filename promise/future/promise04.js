// function returning promises
function riceFried(){
    const bucket = ['coffee', 'chips', 'vegitables', 'salt','rice'];
    return new Promise((resolve, reject) => {
        if (bucket.includes("vegitables") && bucket.includes("salt") && bucket.includes("rice")) {
            resolve("fried Rice");
        } else {
            reject("failed");
        }
    })  
}
riceFried().then((myfriedrice)=>{
    console.log("lets eat",myfriedrice)
}).catch((error)=>{
    console.log(error);
})