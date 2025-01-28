

///Iska structure kaafi important hai.Log bohot galti hai isme...

//Basically ek function hai,jo given time period ke baad khudko repeat karega...(Time is in milliseconds.)\
//Itne time ke baad mein aapne aap ko repeat karunga.

setInterval(() => {
    let date2 = new Date()

    const time = document.querySelector('.text-display')

    time.innerHTML = date2.toLocaleTimeString()
},1000)

