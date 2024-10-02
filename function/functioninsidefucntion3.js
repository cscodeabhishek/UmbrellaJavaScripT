function declaration(){
    const func = ()=> {
        console.log("game is on");
    }
    const add = (num1, num2)=> {
        return num1 + num2;
    };

    const mul =(num1,num2)=> {
        return num1*num2;
    }
    func();
    console.log(add(2,7));
    console.log(mul(2,7));
}
declaration()