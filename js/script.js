const input1 = document.getElementById("textBox1");
const celsius1 = document.getElementById("fahBtn");
const fahrenheit1 = document.getElementById("celsiusBtn");
const submitBtn = document.getElementById("mySubmit");
const results = document.getElementById("results");

function conversionFunction (event){
    event.preventDefault();

    let inputCalculation = Number(input1.value); //get the user input number
    if(input1.value.trim() === "" || isNaN(inputCalculation)){
        alert("Enter a correct field");
    }
    else if (celsius1.checked) { 
        let fahResult = (inputCalculation *(9/5)) + 32;
        results.textContent = `Conversion: ${inputCalculation}°C is ${fahResult.toFixed(1)}°F`; 
    }else if(fahrenheit1.checked){
        let celsius = (inputCalculation -32) * 5/9;
        results.textContent = `Conversion: ${inputCalculation}°F is ${celsius.toFixed(1)}°C`;
    }else{
        inputCalculation = "";
    }
    

    
}
submitBtn.addEventListener("click", conversionFunction);

function resetCalculator(){
    inputCalculation = "";
}

