//how data is stores and accessed in memory basis 2 types:

//Primitive
//call by value-> data changed in copy
/*
7 types: 
String,
Number,  Boolean, null, undefined, symbol, BigInt
*/

const id= Symbol('123')
const anotherId= Symbol('123')

console.log(id===anotherId);

const bigNumber= 327362387463287n
console.log(typeof bigNumber);
//Reference type( Non primitive)

/*
Array, Objects, Functions */


const heroes=["shaktiman", "naagraj"]
let myObj={
   name:"saumya",
   age: 22,
}

const myFunction= function(){
    console.log("Hello world");
}

