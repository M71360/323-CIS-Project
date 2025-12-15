document.addEventListener("DOMContentLoaded", function() {

    const calcBtn = document.getElementById("calculate-btn");

    if(calcBtn) {
        calcBtn.addEventListener("click", function() {

            const weight = parseFloat(document.getElementById("weight-input").value);
            const height = parseFloat(document.getElementById("height-input").value);
            const display = document.getElementById("result-display");

            if(weight > 0 && height > 0) {
                const heightInMeters = height / 100;
                const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
                if(bmi > 25){
                  display.innerText = "Your BMI is: " + bmi + "% you need to loss some weight";
                } else {
                  display.innerText = "Your BMI is: " + bmi;
                }

            } else {
                display.innerText = "Please enter valid numbers.";

            }
        });
    }

});
