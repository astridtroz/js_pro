let a=300
var c=300
if(true){
    let a=10
    const b=20
    var c=30
    console.log(`block scope value of a=${a}`)
    console.log(`block scope value of c=${c}`)
}

console.log(`global scope value of a=${a}`)
console.log(`global scope value of c changes due to declaration by var =${c}`)

function outer(){
    username="saumya"
    function inner(){
        website="web"
        console.log("name")
    }
    //console.log(website)//not available outside scope of inner
    inner()//executed only when called
}

//outer()
//++++++++++++++++++++++++interesting+++++++++++++++++++++++

console.log(addone(5)) //can access addone before declaration
function addone(num){
    return num+1
}

//console.log(result) //cannot access addTwo due to holding by a variable
const result= function addtwo(num){
    return num+2
}


