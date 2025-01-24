//this
const user = {
    username : "raj",
    price : 999,
    
    welcomeMessage : function(){
        //console.log(`${this.username}, welcome to website`);
    }
}
// "this" always refers to current context.
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()


//agar aap bahar console.log(this) print karoge toh aapko empty object milega,"this" always refers to latest and current context.


function chai(){
    let userName = "Pratham"
    console.log(this.userName);
    //yaha "this" nahi chalta in function,onlty object mein chalta hai.
}
//chai()


const chai2 = () => {
    let username =  "pratham"
    console.log(this);
}
//chai2()
//Bas function keyword ke jagah baadme "=>" daala hai.

//  () => {}   Basic syntax.

const multNum = (num1,num2) => {
    return num1*num2;
}
//console.log(multNum(3,9))


const sub = (num1,num2) => {
    
    let chai = 12
    return num1 - num2 + this.chai;
}
//console.log(sub(12,6))
//yaha pe bhi "this" nahi chalta function mein.


//Implicit return.(return likhni ki jarurat nahi)
const add = (num1,num2) => num1 + num2;
console.log(add(3,4))

const add2 = (num1,num2) => (num1 + num2);
console.log(add2(3,4))
//Curly braces use hua toh return dena padta hai,warna no need return in implicit declaration.


//Object return kaise karre.
const add3 = (num1,num2) => ({username : "Pratham"})
//object mein return ke waaqt aapko curly braces daalne hi padenge.

