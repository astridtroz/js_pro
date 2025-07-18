let myDate= new Date()
//console.log(typeof myDate); //object

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);



let mydates= new Date(2023,0,23)//months start from 0
let mydate1= new Date(2023,0, 23,5,3)
let mydate2= new Date("2023-01-14")
let mydate3= new Date("01-14-2023")

    // console.log(mydates.toDateString());
    console.log(mydate1.toDateString());
    // console.log(mydate2.toDateString());
    // console.log(mydate3.toDateString());


let myTimeStamp=Date.now()

//  console.log(myTimeStamp);
//  console.log(mydate3.getTime());

 console.log(Math.floor(Date.now()/1000));

let newDate= new Date();//current date

// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());

// console.log(newDate.toLocaleString('default', {
//     weekday:"long"
// }))
