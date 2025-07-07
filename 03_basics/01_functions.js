function myName(){
    console.log("h")
    console.log("i")
    console.log("t")
}

//myName()//myName=reference of function , ()->execution of function

// function add( number1, number2){
//     console.log(number1+number2)
// }

// let result= add(5,3);

function add( number1, number2){
    let result=(number1+number2)
    return result
}

let result= add(5,3);
//console.log(result)

function loginUserMessage(username="sam"){//default value
    if (!username){//conditional check
        console.log("please give valid username")
        return//exits function
    }
    return `${username} just logged in` //return does not print value only returns it
}
//console.log(loginUserMessage("sam"))//console.log prints it

//How to pass multiple values in function

function calculatePrice(val1, val2,...num){//rest operator
    return num
}
//console.log(calculatePrice(200, 300, 400, 2000))//first 2 values are taken by val1 and val2 rest are taken by rest oprtr


const user={
    username:"hitesh",
    price:"99"
}

function handleObject(anyObject){
    console.log(`user name is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(user)

const myNewArray=[10,20,30]

function returnSecondValue(getArray){
    return getArray[0]
}
console.log(returnSecondValue(myNewArray))