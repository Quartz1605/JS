const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach((button) => {
    button.addEventListener('click',(events) =>{
        console.log(events)
        console.log(events.target)
        if(events.target.id == "grey"){
            body.style.backgroundColor = "grey"
        }
        else if(events.target.id == "white"){
            body.style.backgroundColor = "white"
        }
        else if(events.target.id == "blue"){
            body.style.backgroundColor = "blue"
        }
        else if(events.target.id == "yellow"){
            body.style.backgroundColor = "yellow"
        }
        else{
            body.style.backgroundColor = "orange"
        }

    })
})