// arrow function behaviour
// arrow function dont have any this. it take its this.keyword from the nearest surrounding (1 level above)
const userName={
    fistName: "abhishke",
    age: 17,
    about:()=>{ // defining here arrow function
        console.log(this.fistName, this.age);
    }
}
userName.about(userName); // output: undefined undefined
// this is here : window object