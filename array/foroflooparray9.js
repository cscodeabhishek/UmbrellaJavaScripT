//for of loop in array
// Loop :Iterate
const fruits = ["apple", "dragonfruit", "kiwi", "redberry"]
for (let fruit of fruits) {
    console.log(fruit);
}
//op : ["apple"], 
// ["dragonfruit"],
//  ["kiwi"], 
// ["redberry"]

// for in loop : it will give the index to all element present in the array
const fruitss = ["apple", "dragonfruit", "kiwi", "redberry"]
const fruitsss = [];
for (let index in fruitss) {
    console.log(fruitss[index]);
}
