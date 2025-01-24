//"for Each" loop.
const coding = ["js","ruby","python","cpp"]

//item just parameter jo access karta value from array.

//callback function ka naam nahi hota.
coding.forEach( function (item) {
    //console.log(item);
})

//Using arrow function.
let value = 0
coding.forEach((item) => {
    value = value+1;
})
//console.log(value);

//another way to use ForEach.Function bahar likh ke.
function printMe(item){
    //console.log(item);
}
coding.forEach(printMe)

//Getting all info from forEach.
coding.forEach((item,index,arr) => {
    //console.log(item);
    //console.log(index);
    //console.log(arr);
})

//Database ke liye Important concept.
const myCoding = [
    {
        languageName : "Python",
        languageFilename : "py"
    },
    
    {
        languageName : "JavaScript",
        languageFilename : "js"
    },
    {
        languageName : "Java",
        languageFilename : "java"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName)
})


