/*async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        //console.log(data)
    }
    catch(error){
        console.log("Error")
    }
}
getAllUsers() //await kya karta hai basically function excution stop karta hai till uske baad wala kaam pura nahi hota.
//yaha data ko jsonify hone mein time lagta hai so we use "await" wahape bhi. */


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => { 
    return response.json() //yaha console log karoge toh kuch print nahi hoga cus .json() mein time lagta hai,hence return it and next then mein use karo.
})
.then((response2) => {
    console.log(response2)
})
.catch(() => {})