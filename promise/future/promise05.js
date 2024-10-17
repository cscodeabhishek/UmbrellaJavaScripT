// promise and setTimeout
function myPromise(){
    return new Promise((resolve,reject)=>{
        const value = gfdtbbjksvhgcj; //op reject
        setTimeout(()=>{
            if(value){
                resolve();
            }else{
                reject();
            }
        },2000)
    })
}

myPromise()
.then(()=>{console.log("resolved")})
.catch(()=>{console.log("rejected")})











// I want to resolve/reject promise after 2 second