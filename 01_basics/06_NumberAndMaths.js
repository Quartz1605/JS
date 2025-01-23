const score = 400

const balance = new Number(100)
console.log(balance);

console.log(balance.toFixed(2))
//for decimals value precision.

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(2))
//Used to convert Number into utni digits jitni toPrecision mein di ho.


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))
//use to add commas into number,"en-IN" is used to avail indian comma system.


// ************ MATHS ********************

console.log(Math);

console.log(Math.abs(-94));
console.log(Math.round(4.32));
console.log(Math.ceil(4.8));

console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log((Math.random() * (max-min + 1)) + min)
//Yeh formula hai remeber karlo..