//Strings ke methods padhne hai, so pls time spend karo unpe.
console.log("Hello" + " Pratham")

const Name = "pratham"
const repocount = 12;

console.log(Name + repocount + " value")

console.log(`Hello my name is ${Name},and my Repository count is ${repocount}`)
//This method is called stringInterpolation,backticks are used in it.

//String Declaration(New method)
const gameName = new String('Pratham')

console.log(gameName[0]);


console.log(gameName.length)

console.log(gameName.toUpperCase())//Functions ka use of string.

console.log(gameName.charAt(2))

console.log(gameName.indexOf('t'))


const newString = gameName.substring(0,4)//Used for slicing.
console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringOne = "  Pratham  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://pratham.com/pratham%20barekal"
//kabhi bhi url form mein 'space' mile toh waha %20 by default aa jata hai.

const newURL = url.replace('%20','-')
console.log(newURL);

console.log(url.includes('P'))








