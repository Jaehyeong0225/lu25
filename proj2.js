document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("userForm");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const name = document.getElementById("name").value.trim();
        const age = document.getElementById("age").value.trim();

        if (name === "" || age === "") {
            resultDiv.innerHTML = "<p style='color:red;'>Please fill in all fields.</p>";
            return;
        }

        const ageInMonths = age * 12;
        const message = `<p>Hello, ${name}! You have lived for ${ageInMonths} months.</p>`;

        resultDiv.innerHTML = message;

        console.log(`Name: ${name}, Age: ${age} years (${ageInMonths} months)`);
    });
});
