function cartPrice(num1){
    return num1;
}

//console.log(cartPrice(100));
//But agar hum do teen pass kiye argument toh bass first value arg return hoti hai.

//Rest operator 
function cartPrice2(...num1){
    return num1;
}

console.log(cartPrice2(100,400,542,123));
//Abhi aapke pass array return hota hai,which helps aapko aage bhi,"spread" operator jaisa hi syntax hai iska.

function cartPrice3(val1,val2,...num1){
    return num1;
}
//Iss case mein first two arguments will treated as normal arguments and uske baad walo ka array conversion hoga.

//Objects in Functions.
const user = {
    username : "Pratham",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username},and your price is ${anyobject.price}`)
}

//Arrays in Function.

const randomArray = ["pratham","pranav","ahmed"]

function friends(randomArray){
    for(let i=0;i<3;i++){
        console.log(`Name of the ${i+1} friend is ${randomArray[i]}`);
    }
}

friends(randomArray)

//Another way to declare functions is 

const sum = function(num1){
    return num1+1;
}

console.log(sum(1))

//Aapne agar iss tarah se function declare kiya toh aap usse pehle declaration ke use nahi kar sakte.
//Normal tarike ke se define kiya toh pehle call kar sakte ho declaration ke.