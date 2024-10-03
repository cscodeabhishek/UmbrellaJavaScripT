//map creates a new array by taking each item from the original array, performing an operation on it, and storing the result in the new array.
//Does it change the original array?: No, it leaves the original array unchanged.
//Does it return something?: Yes, it always returns a new array with the modified elements.

const prices=[100,200,300,400,500];
const discountPrice = prices.map(price=>price*0.9); // here apply map method just to fast forward the output result
console.log(discountPrice);

// example 2
const numbersss=[1,2,3,4,5];
const square =function(number){
    return number * number;
}

const squareNumber =numbersss.map(square); // here it won't printing the output because map method always return the new array from the orginal array by applying some operation on it
console.log(squareNumber); // here it will print output as [1,4,9,16,25]

// example 2
const numb=[1,2,3,4,5];
const squaree =function(number){
    // return number * number; // instead of this if you console here like this 
    console.log(number*number); // it will give you the output as [1 ,4,9,16,25] but resultant output of map method got disturbed because map method always return the new array from the orginal array and here it will return you undefined array
}
const squareNumberr =numbersss.map(square); 
console.log(squareNumberr);
// In forEach use console.log  but in map method always used return (so it will return you the array )