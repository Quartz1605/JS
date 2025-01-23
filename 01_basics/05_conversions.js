let score = "33abc"




let valueInNumber = Number(score);
//Use Capital "Number" not "number", same with string to convert. 

console.log(typeof valueInNumber);
console.log(valueInNumber);
//Convert ho jayega but jab print karoge tab dikkat dega aapko.

let score1 = null;
let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber1);
console.log(valueInNumber1);

//boolean mein 1 and 0 mein convert ho jayega.
// "33" => 33
// "33abc" => NaN (not a number)
// true => 1; false => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//1 => true ; 0 => false
// "" => false
//"pratham" => true.

let sum = 33;
let strNum =  String(sum)
console.log(typeof strNum)


