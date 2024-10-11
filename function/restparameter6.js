function restParamter(a,b,c,...d){
    console.log(`value of ${a}`);
    console.log(`value of ${b}`);
    console.log(`value of ${c}`);
    console.log(`value of ${d}`);
}
restParamter(1,2,3,5,6,7,8,9,9)

function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total=total+number;
    }
    return total
}
var cost =addAll(1,3,5,6,7,9)
console.log(cost);