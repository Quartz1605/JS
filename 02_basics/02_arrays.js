const marvel_heros = ["Thor","IronMan","Spiderman"]
const DC_heros = ["Superman","Flash","Batman"]

//marvel_heros.push(DC_heros)
//console.log(marvel_heros);
// Array ke andar array chala jaata hai.Array is treated as a single element.
//console.log(marvel_heros[3][1]);

//const all_heroes = marvel_heros.concat(DC_heros);
//console.log(all_heroes)
//Naya element mein leke karna agar two arrays merging karni hot toh.


const all_new_heros = [...marvel_heros,...DC_heros]
//console.log(all_new_heros)
//isse 'Spread' operator bolte hai,pehle "..." daalte hai and baad write wo array jisse merge karna hai.


const another_array = [1,2,34,[4,5,6],5,[7,8,9],[12,34,22,12,[1,2,3]]]
const usable_another_array = another_array.flat(Infinity)
//console.log(usable_another_array)
//Array ko convert karta into single array without


console.log(Array.isArray(["Pratham"]));
console.log(Array.from("Pratham"));
console.log(Array.from({name : "ahmod"}))//Interesting case.
//Isko yeh convert nahi kar pata.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))



