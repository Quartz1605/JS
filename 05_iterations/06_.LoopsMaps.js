const coding = ["js","ruby","python","cpp"]

const values = coding.forEach((item) => {
    //console.log(item);
    return item;
})
//console.log(values)
//Ye kuch kuch bhi value return nahi karta hai.

const myNums = [1,2,3,4,5,6]

const newNums = myNums.filter((num) => num > 2)
//console.group(newNums);
//filter returns value.Condition true hote hi values return karri jayengi.

const newNums2 = myNums.filter((num) => {
    return num > 2
})
//console.group(newNums2);
//Iss case mein empty array return hoga.So iss case mein aapko "return" likhna padta hai.
//cus aapne scope introduce karaya hai.

//Doing the same using forEach.Bas ye return nahi karta like filter.
const newNums3 = []
myNums.forEach((num) => {
    if(num>2){
        newNums3.push(num)
    }
})
console.log(newNums3)