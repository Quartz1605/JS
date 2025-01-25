const myNum = [1,2,3,4,5,6,7,8,9];

const newNums = myNum.map((num) => num+10)
console.log(newNums)
//aapne aap hi return kardeta hai.

const newNums2 = myNum.map((num) => {return num+10})
console.log(newNums2)