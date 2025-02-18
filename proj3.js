document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("userForm");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const name = document.getElementById("name").value.trim();
        const age = document.getElementById("age").value.trim();

        if (name === "" || age === "" || isNaN(age) || age <= 0) {
            resultDiv.innerHTML = "<p style='color:red;'>⚠ Please enter a valid name and age.</p>";
            return;
        }

        const ageInMonths = age * 12;
        let message = `<p>Hello, ${name}! You have lived for ${ageInMonths} months.</p>`;

        if (age < 13) {
            message += `<p style="color: green;">You're still young, enjoy your time!</p>`;
        } else if (age >= 13 && age <= 19) {
            message += `<p style="color: blue;">Teen years are exciting, keep exploring!</p>`;
        } else if (age >= 20 && age <= 35) {
            message += `<p style="color: purple;">You're in your prime, keep pushing forward!</p>`;
        } else {
            message += `<p style="color: brown;">Age is just a number, stay active and happy!</p>`;
        }

        resultDiv.innerHTML = message;
        console.log(`Name: ${name}, Age: ${age} years (${ageInMonths} months)`);
    });
});
