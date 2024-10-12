// sort method
const array =[1200,2,3,4];
array.sort();
console.log(array);
// expected output [2,3,4,1200]
// but the output is (4) [1200, 2, 3, 4]
// this is happening because in javascript it convert the given array into string 1200 to string and same as for 2,3,4 to the string
// asci value of 1200 take as the asci value of first char as [1] and which is 49
// the asci value of [2]] and which is 49
// the asci value of [3] and which is 49
// the asci value of [4] and which is 49

// for correct output we can follow this

const array2 =[1299,99,0,8,23,4];
array2.sort((a,b)=>a-b);
console.log(array2);

//Sorting with Mixed Numbers and Strings:

const mix = [200, "500", 20, "30"];
mix.sort((a, b) => a - b);
console.log(mix); // Output: [20, "30", 200, "500"


//Sorting Array of Objects by Name:
const products = [
    { name: "Laptop", price: 2000 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 100 }
  ];
  products.sort((a, b) => a.name.localeCompare(b.name));
  console.log(products);
  // Output: [{Keyboard}, {Laptop}, {Mouse}]
  
// ecommerce price low to high method
const productss=[
  {productId:1,prdoductName:"iphone16pro",productPrice: 620000},
  {productId:2,prdoductName:"iphone15pro",productPrice: 240000},
  {productId:3,prdoductName:"iphone14pro",productPrice: 260000},
  {productId:4,prdoductName:"iphone13pro",productPrice: 280000},
  {productId:5,prdoductName:"iphone12pro",productPrice: 320000}
];
productss.sort((a,b)=>{
  return a.productPrice-b.productPrice
});
console.log(productss);

// ecommerce price low to high method
const prod=[
  {productId:1,prdoductName:"iphone16pro",productPrice: 20000},
  {productId:2,prdoductName:"iphone15pro",productPrice: 240000},
  {productId:3,prdoductName:"iphone14pro",productPrice: 260000},
  {productId:4,prdoductName:"iphone13pro",productPrice: 280000},
  {productId:5,prdoductName:"iphone12pro",productPrice: 320000}
];
prod.sort((b,a)=>{ 
  return a.productPrice-b.productPrice
});
console.log(prod);