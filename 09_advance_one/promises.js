//promise one

const promiseOne=new Promise( function(resolve, reject){//resolve is connected to then
   //Do an async task
   //DB calls, cryptography, network
   setTimeout(function(){
    console.log('Async task is completed');
    resolve()//to pass resolve to then
   },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})


//promise 2

new Promise( function(resolve, reject){ //without storing promise 
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

//promise 3

const promiseThree= new Promise( function(resolve, reject){ //resolve can be used to pass parameters
    setTimeout(function(){
        resolve({username:"Chai",  email:"chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

//promise 4

const promiseFour= new Promise( function(resolve, reject){
    setTimeout( function(){
        let error=true
        if(!error){
            resolve({username: "hitesh", password:"123"})
        }else{
            reject('Error: something went wrong')
        }
    },1000)
})

promiseFour
.then((user)=> {
    console.log(user);
    return user.username
})
.then((username)=> {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=> { console.log("Promise is either resolved or rejected")})

//promise 5

const promiseFive= new Promise(function(resolve, reject){
    setTimeout( function(){
        let error=true
        if(!error){
            resolve({username: "hitesh", password:"123"})
        }else{
            reject('Error: JS went wrong')
        }
    },1000)
})

async function consumepromiseFive() {
    try {
        const response= await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumepromiseFive()


// async function getAllUsers() {
//     try {
//         const response= await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=> {
    console.log(data);
})
.catch((error)=> console.log(error))