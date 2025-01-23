// Var is not scope limited.

if(true){
    var c = 30;
}
//console.log(c);
//if ke andar defined hai phir bhi bahar available ho raha hai.
// Loop/if/else ke andar ko bolte hai block scope and bahar jo likha hai usse bolte hai global scope.


//Nested scope

function one(){
    const username = "Pratham";

    function two(){
        const website = "youtube";
        console.log(username);
    }

    //console.log(website);

    two()
}
//child function parent ke variable ko access kar sakta hai, but parent child ke varibles access nahi kar pata.


if(true){
    const username1 = "pratham"
    if(username1 ===  "pratham"){
        const website = "youtube"
        console.log(username1 + website);
    }

    console.log(website);
}
console.log(username1);
//same logic  upar jaise, parent and child wala.