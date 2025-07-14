const coding=["js","cpp","swift","python","ruby"]

//coding.forEach( function (val){ console.log(val)} )

//using arrow function with for each

//coding.forEach( (val)=> { console.log(val)})

//passing reference of a function to for each

function printme(item){
     //console.log(item)
}

//coding.forEach(printme)

coding.forEach((item, index, arr)=>{
    //console.log(item, index, arr)
})

//array of object

const myCoding=[
    { lname: "js",
      lf: "j"
    },
    { 
        lname: "python",
      lf: "py"
    },
    {
        lname: "c++",
      lf: "cpp"
    },
]
myCoding.forEach( (item)=>{
    console.log( item.lname)
})