const user={
    username:"hitesh",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)//this accesses current context value
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()

//console.log(this)//node context

// function one(){
//     let username="sam" 
//     console.log(this.username)//not able to use inside function
// }
// one()

// const chai=function one(){
//      let username="sam" 
//      console.log(this.username)//not able to use inside function
//  }

// const chai= ()=>{
//     let username="Hitesh"
//     console.log(this.username)
// }
//  chai()

// const addtwo= (num1,num2)=>{
//     return num1+num2 //explicit return using return keyword
// }

//const addtwo= (num1,num2)=> num1+num2 //implicit return no rturn keyword
 
//const addtwo= (num1,num2)=> (num1+num2)

const addtwo= (num1,num2)=> ({username:"hitesh"}) //objects can only be returned in paranthesis

console.log(addtwo(3,5))


