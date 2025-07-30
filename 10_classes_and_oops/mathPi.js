const descriptor= Object.getOwnPropertyDescriptor(Math, "PI") //value can't be changes because writable , configurable are false
console.log(descriptor)

const chai={
    name:"sam",
    price:20,
    isAvailable:true
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name',{
    writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));