//Immediately invoked function Expressions.

(function chai(){
    console.log(`DB CONNECTED`)
})();

//Function jo immediately execute ho jaate.
//Used to avoid pollution due to global variables.
//(andar function definition likho.) and calling ke liye use "()".

//Arrow mein iife
( () => {
    console.log(`Gooba`)
})();
//Don't forget "semicolon" after first calling of iife, warna aapko second code execution ke waqt dikkat hogi.

( (surname) => {
    console.log(`Gooba ${surname}`)
})('jayvant')
