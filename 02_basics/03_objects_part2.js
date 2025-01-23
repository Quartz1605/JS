const tinderUser = new Object()
//This is a singletonn object.

const tinderUser2 = {}
//This is a non-singleton object.

tinderUser.id ="123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

const regularUser = {
    email : "Some@gmail.com",
    fullName : {
        userFullname : {
            first_name : "Pratham",
            last_name : "Barekal",
        }
    }
}
//Nested objects.
console.log(regularUser.fullName.userFullname.first_name)

//Object merging.
const obj1 = {
    1:"A",
    2:"B"
}

const obj2 = {
    3:"C",
    4:"D"
}

//First way.

const obj3 = Object.assign({},obj1,obj2)

//Second Way(Most Important)
const obj4 = {...obj1,...obj2};
console.log(obj4);
//Always use hamesha spread operator ka hi aayega.


//Jab Database se aayega.

const users = [
    {
        id : 1,
        email : "h@gmail.com"
    }
]
//aayega tab array of objects aayega.

//users[1].id //Aisa avail kar sakte ho.

console.log(Object.keys(tinderUser));
console.log(Object.keys(tinderUser2));
//Saare keys milte hai isse in Array format (yeh important hai) kaafi use hota hai.




