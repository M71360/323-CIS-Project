document.addEventListener("DOMContentLoaded", function() {

    const calcBtn = document.getElementById("calculate-btn");

    if (calcBtn) {
        calcBtn.addEventListener("click", function() {
            const weight = parseFloat(document.getElementById("weight-input").value);
            const height = parseFloat(document.getElementById("height-input").value);
            const display = document.getElementById("result-display");

            if (weight > 0 && height > 0) {
                const heightInMeters = height / 100;
                const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

                if (bmi > 25) {
                    display.innerText = "Your BMI is: " + bmi + " (Overweight). You might need to lose some weight.";
                } else if (bmi < 18.5) {
                    display.innerText = "Your BMI is: " + bmi + " (Underweight). You might need to eat more.";
                } else {
                    display.innerText = "Your BMI is: " + bmi + " (Normal). Great job!";
                }
            } else {
                display.innerText = "Please enter valid positive numbers.";
            }
        });
    }

    function isValidEmail(email) {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    }

    const regForm = document.getElementById("register-form");

    if (regForm) {
        regForm.addEventListener("submit", function(event) {

            event.preventDefault();

            const username = document.getElementById("username").value.trim();
            const email = document.getElementById("user-email").value.trim();
            const password = document.getElementById("user-password").value;
            const msgDisplay = document.getElementById("register-message");

            msgDisplay.style.color = "red";

            if (username === "") {
                msgDisplay.innerText = "Error: Username is required.";
                return;
            }

            if (!isValidEmail(email)) {
                msgDisplay.innerText = "Error: Please enter a valid email address (e.g., name@example.com).";
                return;
            }

            if (password.length < 1) {
                msgDisplay.innerText = "Error:You need to add Password.";
                return;
            }

            msgDisplay.style.color = "green";
            msgDisplay.innerText = "Success! Account created for " + username + ".";

        });
    }
});
