// for loops

let val = 0;
for(let index=0;index<10;index++){
    val++
}
console.log(val);

let myArray = ["Flash","Batman","superman"]
for(let i=0;i<myArray.length;i++){
    console.log(myArray[i]);
}

//break and continue

for (let index = 1; index < 10; index++) {
    if(index === 5){
        console.log(`'5' detected.`)
        break;
    }
    
    console.log(`Value of index is ${index}.`)
}
// continue aaya toh ek baar maafi milti hai,neeche wala code execute nahi hota,directly next loop pe chala jaata hai.