// Kuch chizo ko default truth maan liya jaata hai.

/*
falsy values : false,0,-0,"",null,undefined,NaN,BigInt 0n. 
*/

/*
truthy values : "0"(string ke andar Zero is truthy.),'false'," ", {},[], function(){}
*/

//How to check whether a array is empty.

const ids = [];

if(ids.length === 0){
    console.log("Array is empty.")
}

//And how to check whether an object is empty or not.

const userInfo = {}

if(Object.keys(userInfo).length === 0){
    console.log("Object is empty.")
}





