let myHeros= ["thor", "spiderman"]

let heroPower={
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

//add a function in prototype of object so that it is available in all objects
Object.prototype.hitesh= function(){
    console.log(`hitesh is present in all objects`)
}

Array.prototype.heyHitesh= function(){
    console.log("says hello")
}

heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()


////////////////////////
//inheritance

const User={
    name:"chai",
    email:"chai@google.com"
}

const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
   makeAssignment:'JS Assignment',
   fullTime: true,
   __proto__: TeachingSupport
}

Teacher.__proto__=User //prototypal inheritance= accessing property of someone else

//modern syntax

Object.setPrototypeOf(TeachingSupport , Teacher)

let anotherUsername="ChaiAurCode      "

String.prototype.truelength= function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.truelength()
"hitesh".truelength()