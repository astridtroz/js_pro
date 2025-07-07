//array

const arr=[0,1,2,true, "hitesh"]//any element, resizable
//0 based indexing
//shallow copies , share same reference point

const myArr=[0,1,2]
const myHeroes=["shaktiman", "naagraj"]

const myarr2= new Array(0,1,2,3,4,5);

//array methods

// myarr2.push(6)
// myarr2.push(7)
// myarr2.pop()

//myarr2.unshift(9)//insert at start but takes much time
//myarr2.shift() //remove from start

// console.log(myarr2.includes(9));
// console.log(myarr2.indexOf(9));

const newArr= myarr2.join()

// console.log(myarr2);
// console.log(newArr);

//slice , splice

console.log("before slice", myarr2);
const myn1= myarr2.slice(1,3)
console.log(myn1);
console.log("after slice",myarr2);

const myn2= myarr2.splice(1,3)
console.log(myn2);
console.log("after splice", myarr2);

/* slice excludes the last range and doesnt effect the og array
 splice includes the last range and deletes the elements i->j 
 from og array */





