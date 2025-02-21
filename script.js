const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const weight = document.getElementById("weightInput").value;
    const height = document.getElementById("heightInput").value;
    const result = document.getElementById("result");
    // check condition
    if(isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0){
        result.textContent = "Please enter valid weight and height.";
        return;
    }
    // calculate bmi
    else{
        const bmi = (weight / ((height * height)/1000)).toFixed(2);
        result.innerHTML =`<span>Your BMI is: ${bmi}</span>`;
    }
});