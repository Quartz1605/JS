const form = document.querySelector("form")

form.addEventListener("submit",(events) => {

    events.preventDefault();
    const height = (parseInt(document.querySelector('.height').value))/100
    const weight = parseInt(document.querySelector('.weight').value)
    

    if(height == '' || height < 0 || isNaN(height) ){
        const results = document.querySelector('.invalid-result')
        results.innerHTML = "Pls enter a valid  Height."
    }
    else if(weight == '' || weight < 0 || isNaN(weight)){
        const results = document.querySelector('.invalid-result')
        results.innerHTML = "Pls enter a valid Weight."
    }
    else{
    const results = (weight/(height*height))
    const results1 = results.toFixed(2)
    
    
    
    document.querySelector('.result').innerHTML = `Your BMI is ${results1}.`

    }
})
    
    


