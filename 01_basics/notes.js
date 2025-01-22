/* Primitive : 7
String,Number,Boolean,null(empty),undefined,Symbol,BigInt.*/

/* Referencetype(Non-primitive)
Arrays,Objects,Functions.*/

//Javascript is dynamically typed language.

const id = Symbol('123');
const anotherId = Symbol('123');
//dono alag honge,bhale hi aap same value pass karo.


// Stack(Primitive) and Heap(Non-Primitive) Memory.

let myYoutubeName = "pratham.com"
let yourYoutube = myYoutubeName

yourYoutube = "raj.com";

console.log(yourYoutube);
console.log(myYoutubeName);

//Primitive datatype mein copy pass on hoti hai,so original remains the same without any changes.

//But in Heap

let userOne = {
    email:"pratham.com",
    upi : "pratham@okhdcf",
}

let userTwo = userOne;

userTwo.email = "pratham@google.com"

console.log(userOne.email);
console.log(userTwo.email);

//Isme userone mein bhi change ho jaata cus call  by refernce hota hai and
//uske wajah se copy nahi jaati.






