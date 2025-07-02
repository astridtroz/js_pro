 //two ways to declare objects->literal or constructor

//singleton-> objects from costructor

//object literals
const mysym= Symbol("")

const JsUser={
    name:"Hitesh",
    age:18,
    [mysym]:"key1",//synax for using symbol
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser[mysym])

//Object.freeze(JsUser)
//JsUser.email="hi"
// console.log(JsUser.email)

JsUser.greeting= function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo= function(){
    console.log(`Hello Js user , ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());