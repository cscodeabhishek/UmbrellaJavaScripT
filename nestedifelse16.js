//nested if else
// game rule are below;
// winning number is 25
// 25 your guess is right
// 21 too low
// 20 too high
const winningNumber = 25;
let userGuess = +prompt() // prompt take input in the string only
if (userGuess === 25) {
    console.log("your guess is right");
} else {
    if (userGuess < 25) {
        console.log("too low");
    } else {
        console.log("too high bhai");
        }
    }
console.log(typeof userGuess, userGuess);