function multiplyBy5( num){
     return num*5
}

multiplyBy5.power=2

//everything in javascript is an object , function is a function as well as an object of JS
console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype) //prototype can be accessed

function createUser(username, score){
    this.username=username //this is used to set current context
    this.score=score
}

//by default jo context set hota h prototype ka uss method ka this= {}

//as function is an object and object's prototype and attributes can be accessed and added so a function can be added in a function

createUser.prototype.increment= function (){
    this.score++ //jisne bulaya hai uske paas jao
}

createUser.prototype.printMe= function(){
    console.log(`score is ${this.score}`)
}

//both use same function
const chai = new createUser("chai", 25)
const tea= new createUser("tea", 250)

chai.printMe()
tea.printMe()

/*When you write:

const person1 = new Person("Saumya", 22);
Here's what happens behind the scenes in 4 steps:

1. Create a new empty object
let obj = {};

2. Set the prototype
The new object’s __proto__ is set to Person.prototype.
obj.__proto__ = Person.prototype;

3. Call the constructor function
The function Person is called with this pointing to the new object:
Person.call(obj, "Saumya", 22);

Inside the function, this.name = name adds properties to the object.

4. Return the object
The object obj is returned and stored in person1. */