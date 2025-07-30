function SetUsername(username){
    this.username=username
    console.log("called")
}

function createUser(username, email , password){
    SetUsername.call(this,username) // calls inner function and hold the reference , without call the execution context of inner function expires
   // to hold the reference this keyword is used
   //call makes sure that when execution context of calld function is gone , its values stores in current context (this) stay
    this.email=email
    this.password=password
}

const chai= new createUser("chai", "chai@fb.com", "124")
console.log(chai)