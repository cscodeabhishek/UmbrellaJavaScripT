//non declarative language :JAVASCRIPT IS NON DECLARATIVE LANGUAGE 
const objs =[{
    name:"Abhishek",
    age:25},
    {name:"ekta",
    age:18,
    city:"Delhi"},
    {name:"ankit",
    age:22,
    city:"Delhi"
    },
]


const result =[]
for (i=0; i<objs.length;i++){
    if (objs[i].age>=18)
    result.push(objs[i]);
}
console.log(result);

//declarative language    : SqL ISN'T DECLARATIVE LANGUAGE 

//SELECT * FROM obj WHERE age>20;