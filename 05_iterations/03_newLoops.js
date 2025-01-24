// for of Loops
// [{},{},{}]

const arr = [1,2,3,4,5]

for(const num of arr){
    //console.log(num);
}

const str = "Hello World"

for(const alpha of str){
    if(alpha === ' '){
        continue;
    }
    //console.log(`Each char is ${alpha}.`)
}

//Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States")
map.set('IN',"India")
//Isme same entries nahi jaati kabhi,maps  are known for storing unique values.
//console.log(map)

for(let key of map){
    //console.log(key)
}

//agar aapko dono print karwana hai (key and value)
for(let [key,value] of map){
    console.log(`${key} :- ${value}`)
}

//Object in "for of" loop

const myObj = {
    game1: "NFS",
    game2: "NFS2",
}
//"for of" wala code jo humne maps mein use kiya tha wo yaha nahi chalega.





