//Dates

let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
//console.log(typeof myDate) //Object hoti hai date.

let myCreatedDate =  new Date(2023,0,23);
//Months in JS start from Zero.
//console.log(myCreatedDate.toDateString())

let myCreatedDate2 =  new Date("2023-01-14");
//YY-MM-DD

//IN India MM-DD-YY hum yeh follow karte hai.
let myDate2 = new Date("05-16-2005");
//console.log(myDate2.toDateString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);

//console.log(myDate2.getTime());
//console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
//console.log(newDate.getDay())

//console.log(Date.now())

let currentDate = new Date()
//console.log(currentDate.toDateString())

let day = currentDate.getDay();
let hours =  currentDate.getHours();
let month = currentDate.getMonth();

//console.log(`Current day is ${day},Current hours are ${hours},Current month is ${month}.`)

newDate.toLocaleString('default',{
    weekday: "long",
})



