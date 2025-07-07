const balance=1000

//if(balance==500) console.log("test"), console.log("test2")//not good practice to write code like this 

const userLoggedIn =true
const debitCard=true

if(userLoggedIn && debitCard  || 2==3)
    console.log( `login`)

//switch

const month=3
switch(month){
    case 1:
        console.log("January");
        break
    case 2:
        console.log("February")
        break
    case 3:
        console.log("March")
        break
    case 4:
        console.log("April")
        break
    default:
        console.log("None")
        break
}