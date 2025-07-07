const marvel_heros=['thor', 'Ironaman', 'spiderman']
const dc_heros=['superman', 'flash', 'batman']

//marvel_heroes.push(dc_heroes)//pushes in same array
// const allHeroes=marvel_heroes.concat(dc_heroes);//return new array,only 2
// console.log(allHeroes);

//const all_new_heros=[...marvel_heros, ...dc_heros]//more than 2
//console.log( all_new_heros);

const another_array= [1,[2,3], [4,[5,[6]]]];
const flattened= another_array.flat(Infinity)
// console.log(flattened);

console.log(Array.isArray("hit"));
console.log(Array.from("hit"));
console.log(Array.from({name:"hitesh"}))//key or value confusion 

const score1=100
const score2=101
const score3=103

console.log(Array.of(score1, score2,score3));
