const myObject={
    'js': "javascript",
    'cpp': "c++",
    'rb':"ruby",
    'sf':"swift"
}

for( const key in myObject){
   // console.log(myObject[key])
}

const arr=[11,22,33,44,55]

for(const key in arr){
    console.log(`${key}-> ${arr[key]}`)
}