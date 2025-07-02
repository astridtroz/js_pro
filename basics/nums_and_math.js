const score=400
console.log(score);

const balance=new Number(100)
console.log(balance);

console.log(typeof balance.toString());
console.log(balance.toFixed(1));

const on= 123.8966
console.log(on.toPrecision(4));

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'));

//++++++Math+++++++++++

console.log(Math);
console.log(Math.abs(-4));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10
const max=20

console.log(Math.floor(Math.random()* (max-min+1))+min)
