const myArr = [1,2,3,4,5,true,"pratham"];
//Use arr[n] to access elements from the array.

//Array mein when you perfrom copy operations it creates shallow copies.(Refernce mein changes hote hai)
//Deep copies mein bas copy mein changes hote hai og reamins the same.

//console.log(myArr.length)

myArr.push(4);
//Ending mein 4 daalega.

myArr.pop();
//Ending wala gets removed.

console.log(myArr.includes("pratham"));
//Aise kaafi saare methods hai aur.

const myNewArr = myArr.join();
//myNewArr array ko convert karta hai into string format.

const arr =  [12,43,23,12,"pratham","raj"];

const slicArr = arr.slice(1,3);
//console.log(slicArr);
//console.log(arr);
//"1" index se start hoga and 3rd index include nahi hota hai.
//But og array remains the same.

const spliceArr = arr.splice(1,3);
console.log(spliceArr);
console.log(arr);
//Splice mein pura og array change ho jaata hai.
//3 index is also included.So 3 elements bahar aate hai.

