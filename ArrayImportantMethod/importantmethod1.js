//Important array methods

// forEach
// map
// filter
// reduce

const numbers =[1,2,3,4,5];
function multiplyBy2(number,index){
    console.log("index is ",index);
    console.log(`${number}*2 = ${number*2}`);

}
multiplyBy2(numbers[0],0);
multiplyBy2(numbers[1],1);
multiplyBy2(numbers[2],2);
multiplyBy2(numbers[3],3);
multiplyBy2(numbers[4],5);

const numberss =[1,2,3,4,5];
function multiplyBy2(number,index){
    console.log("index is ",index);
    console.log(`${number}*2 = ${number*2}`);

}
for(let i=0; i<numberss.length;i++){ // via for loop
    multiplyBy2([i],i);
}

const numbersss =[1,2,3,4,5];
function multiplyBy2(number,index){
    console.log(`index is ${index} number is ${number}`); // via enchancing the output 

}
for(let i=0; i<numbersss.length;i++){
    multiplyBy2([i],i);
}

const num=[1,2,3,4,5];
num.forEach(function(numb,index){
console.log(`index is ${index} num is ${numb*2}`);
});