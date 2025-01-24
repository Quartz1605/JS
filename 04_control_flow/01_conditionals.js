// if statement

const isUserLoggedIn = 2>3;

if(isUserLoggedIn){
    console.log(`Pray for yourself.`)
}
else if(!isUserLoggedIn){
    console.log(`You are not gay.`)
}


const userLoggedIn =  true
const debitCard = true
const loggedInfromGoogle = false

if(userLoggedIn && debitCard){
    console.log("Allowed to buy courses.")
}
else if(loggedInfromGoogle || debitCard){
    console.log(`Welcome to shopping.`)
}