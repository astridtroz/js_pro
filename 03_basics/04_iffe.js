//Immediately Invoked Function Expression (IIFE)

(function chai(){
    //named iffe
    console.log(`DB Connected`)
})(); //without ; iffe doesnt know when to stop execution

((name)=> console.log(`DB2 connected ${name}`))("sam")//unnamed iffe
//global scope k variables ya usse hone wale pollution ko htane k lie iffe ka use kia
//(function definition)(execution)

