function sayMyName(){
    console.log("Pratham");
}

//sayMyName()

function add(num1,num2){
    
    console.log(num1 + num2);
}

add(1,3);
//call karte waqt jo input jaate hai unhe arguments bolte hai.
//And jo define karte waqt jaate hai unhe parameters bolte hai.

function add2(num1,num2){
    
    return num1 + num2;
}

const sum = add2(14,54);
//console.log(sum);
//return ke baad function kuch execute nahi karta.


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username.")
        return
    }
    return `${username} just logged in.`
}

loginUserMessage("Pratham") //Isse print wagera kuch nahi hoga.
//console.log(loginUserMessage("Pratham"))
console.log(loginUserMessage())
//koi argument nahi diya toh undefined pass hota hai.

//Another way
function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username.")
        return
    }
    return `${username} just logged in.`
}

/*Iss case mein kya hai jab username undefined hoga tab uska default hum false maante hai
so hum kya karr rahe hai "!" daal dete hai jisse wo true ho jaye and if execute hoga. */


