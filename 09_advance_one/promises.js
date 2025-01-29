//Promise is an object representing the eventual completion or failure.

//Creating promises.
const promise1 = new Promise((resolve,reject) => {

    //Do an async task.
    //DB calls,cryptography,network.

    setTimeout(() => {
        //console.log("Async task is complete.")
        resolve() //Cus "resolve" se aap then and aapke promise ko connect karte ho.
                  //So pehle async task complete hogi and after that uske baad wala part.
    },1000)

})

//Consumption of promises.

promise1.then(() => {
    //console.log("Promise consumed.")
})


//Another way of making a promise.
new Promise((resolve,reject) => {
    setTimeout(() => {
        //console.log("Hell yeah nigger");
        resolve()
    },1000)
    
}).then(() => {
    //console.log(`Love ya'll`)
})


//resolve mein parameter.
const promise3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve({username : "Chai",
            email : "chai@aurcode.com",

        }) //resolve ke andar jo bhi parameter aap pass karaoge wo then mein chala jata hai.
    })
})

promise3.then((user) => {
    console.log(user.username)
})


// Rejection handling,chaining,finally(),and correct way of writing the code.
const promise4 = new Promise((resolve,reject) => {
    setTimeout(() => {
        error = true
        if(!error){
            resolve({
                username : "Love",
                id : 4132
            })
        }

        else{
            reject("Error : Something went wrong.")
        }
    },1000)
})

//promise4.then() If resolved
/* promise4.catch(() => {
     console.log(`Bichara`)
 })  //If rejected.

 promise4.then((user) => {
    console.log(user)
    return user.username
}) //aap sidhe nahi return karke, kisi variable mein store karke, phir uska use nahi kar sakte aap.
*/

promise4
.then((user) => {
    console.log(user)
    return user.username
})
.then((username) => {
    console.log(username)
})
.catch((message) => {
    console.log(message)
})  //Isse kehte hai chaining.Used a lot in Databases management.


promise4
.then((user) => {
    console.log(user)
    return user.username
})
.then((username) => {
    console.log(username)
})
.catch((message) => {
    //console.log(message)
})
.finally(() => console.log("Promise is either resolved or rejected."))
//finally execute hoga hi, end mein sab ho jane ke baad


//Without using catch and then.

const promise5 = new Promise((resolve,reject) => {

    setTimeout(() => {
      let error2 = true
        if(!error2){
            resolve({
                username : "Python",
                id : 4132
            })
        }

        else{
            reject("Error : Pythonic went wrong.")
        }
    },1000)
})

/*
async function consumePromise5(){
    const response = await promise5;
    console.log(response)
    
}
consumePromise5() //Yaha call karna padta hai functionn after async await.

//How to handle errors yaha pe  */

async function consume(){
    try{
        const response = await promise5
        //console.log(response)
    }
    catch(error){
        //console.log(error)
    }
}
consume() // yaha try and catch hota hai inplace of then and catch



