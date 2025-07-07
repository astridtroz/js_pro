//const tinder_user= new Object() //object defined from contructor is singleton object
const tinderUser={}//literal object

//console.log(tinderUser);

tinderUser.id="123"
tinderUser.name="Sammy"
tinderUser.loggedIn=false

//console.log(tinderUser);

regularUser={
    email:"sammy@gmail.com",
    username:{
        fullname:{
            firstname:"sammy",
            lastname:"sri"
        }
    }
}

//console.log(regularUser.username?.fullname.firstname)

const obj1={1:'a', 2:"b"}
const obj2= {3:'c', 4:'d'}
const obj4= {5:'c', 6:'d'}

//const obj3={obj1, obj2} //objects inside object

//const obj3=Object.assign({},obj1,obj2,obj4) //return single object, if{} not used everything goes in obj1
// assign-> static method that copies one or more enumerables source to target object

const obj3={...obj1, ...obj2, ...obj4}//spread operator , break and join all
//console.log(obj3)

//Database values, from database values come as array of objects [{}]

const users=[
    {
        id:1,
        email:"h@gmail.com"
    }
]

//console.log(users[0].id)

// console.log(Object.keys(tinderUser))//gives all keys as iterable array
// console.log(Object.values(tinderUser))//gives all values as iterable array
// console.log(Object.entries(tinderUser))//gives all key,value pair as array of array

// console.log(tinderUser.hasOwnProperty('loggedIn'))//before using a property check if it exists

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

// console.log(course["courseInstructor"])
// console.log(course.courseInstructor)

//Destructuring objects
const {courseInstructor:instructor}=course //best way to get values from object
//console.log(instructor)




