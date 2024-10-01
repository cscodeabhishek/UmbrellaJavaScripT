// whileloop example

// let number = 10;
// let total = 0;

// total = total + 1;
// total = total + 2;
// total = total + 3;
// total = total + 4;
// total = total + 5; 
// total = total + 6;

// console.log(total);
// here the algorithm is in 0rder of O(n)
let number = 0;
let total = 0;
let i = 0;
while (i <=1000) {
    total = total + i;
    i++;
}
console.log(total);

// above can be done without while loop here the algorithm is in 0rder of O(1)
let totaL = (number * (number + 1)) / 2;
console.log("totaL");
