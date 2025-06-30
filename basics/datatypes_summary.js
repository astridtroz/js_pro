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

//++++++++++++++++++++++++++++++++++++++++++++++++

//MEMORY:

//Stack(Primitive)->copy, Heap(Non-Primitive)->og value

let ytname="something";
let anothername=ytname
anothername="chaiorcode";
console.log(ytname);
console.log(anothername);

let user1={
    email:"sam@google.com",
    upi:"user@ybl"
}
let user2=user1
user2.email="pam@gmail.com";

console.log(user1.email);
console.log(user2.email);