//Destructuring

const course = {
    name : "js in hindi",
    price :  999,
    instructor : "pratham"
}

//Syntax ek naya wala,Imp hai pls pay attention Kaam mein aayega kaafi.

const {instructor} = course
console.log(instructor);

//Rename bhi kar sakte.
const {instructor:Iname} = course
console.log(Iname);

//Json Format (API se iss format mein info aati hai.)
/*
{
    "name" : "Pratham",
    "id" : 1450,
    "location" : "Texas",
}
*/

