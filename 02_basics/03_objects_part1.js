// object literals

const jsUser = {
    name : "Pratham",
    age : 19,
    location : "Mumbai",
    isLoggedIn : false,
    lastLogindays : ["Monday","Tuesday","Friday"],
    "full name" : "Pratham Jayvant Barekal"
}

console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser["full name"])

//How to use Symbol in Object.

const mySym = Symbol("myKey1");
const jsUser2 = {
    name : "Pratham",
    age : 19,
    location : "Mumbai",
    isLoggedIn : false,
    lastLogindays : ["Monday","Tuesday","Friday"],
    "full name" : "Pratham Jayvant Barekal",
    [mySym] : "Key1"
}
//[] isme likhte hai sym ka naam and waise define karte hai.

console.log(jsUser2[mySym]);

jsUser.email = "NotPratham@gmail.com"
//how to change.

Object.freeze(jsUser2)
//Iske baad kuch bhi change nahi hoga in object,it is freezed now.

jsUser.greeting = function(){
    console.log("Hello JS User.")
}

jsUser.greetingTwo = function(){
    console.log(`Hello how are you doing ${jsUser.name}`)
}

jsUser.greetingTwo = function(){
    console.log(`Hello how are you doing ${this.name}`)
}
//"this" se bhi aap kar sakte ho kaam


console.log(jsUser.greeting());
console.log(jsUser["greeting"]);
console.log(jsUser.greetingTwo());
