//Loops in objects.

const myObj = {
    js: "Javascript",
    cpp : "C++",
    rb : "ruby",
}

// "for in" loop.

//For getting key.
for(const key in myObj){
    //console.log(key);
}

//For gettting value
for(const key in myObj){
    //console.log(myObj[key]);
}

const programming = ["js","python","cpp"]

for(const val in programming){
    //console.log(val);
}
//Isme keys/Index values aati hai.So iska solution is..

for(const val in programming){
    console.log(programming[val]);
}

//Maps are not iterable
