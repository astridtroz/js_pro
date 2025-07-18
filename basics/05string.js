let name="Saumya"
let repoCount="50"

//console.log(`my name is ${name} and my repo count is ${repoCount}`);

const gameName= new String('hitesh')

// console.log(gameName[0])
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString= gameName.substring(0,4);

const anotherString= gameName.slice(-6,4)
console.log(anotherString)

const dtr="  to  "

console.log(dtr.replace('to', '-'))
console.log(dtr.trim())

console.log(dtr.includes('my'))
console.log(gameName.split("t"))