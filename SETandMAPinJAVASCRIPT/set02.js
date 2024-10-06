// set is iterable
// store data
// set also have its own methods
// no index-based access 
// order is not guranteed
// unique items only (no duplication allowed)

const numbers = new Set([1,2,3]);
console.log(numbers);

const numberss = new Set("abc");
console.log(numberss);


const itemss =["item1","item2","item3"];
const newNumbers =new Set();
newNumbers.add(1);
newNumbers.add(2);
newNumbers.add(["item1","item2"]);// after adding the square bracket it is store in different memory location so you can different array here too via like this
newNumbers.add(["item3","item4"]);
newNumbers.add(itemss);
newNumbers.add(itemss); // it wont add here for adding different array you need to do like this [   newNumbers.add(["item3","item4"]); ]



console.log(newNumbers);


const myNewArray = [1,2,2,3,3,4,4,5,6,8];
const uniqueElement = new Set( myNewArray);
console.log(uniqueElement);
console.log(myNewArray);
console.log(uniqueElement.length); // length cant work here

// To print length we need to do the following practice.
let lenght=0;
for(element of uniqueElement){  // used for of loop to print the length of the the array in SET
    lenght++;
}
console.log(lenght);

