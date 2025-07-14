const coding=["js","cpp","swift","python","ruby"]

//coding.forEach( function (val){ console.log(val)} )

//using arrow function with for each

//coding.forEach( (val)=> { console.log(val)})

//passing reference of a function to for each

function printme(item){
     console.log(item)
}

coding.forEach(printme)