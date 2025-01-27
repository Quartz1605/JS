

///Iska structure kaafi important hai.Log bohot galti hai isme...

setInterval(() => {
    let date2 = new Date()

    const time = document.querySelector('.text-display')

    time.innerHTML = date2.toLocaleTimeString()
},1000)

