document.addEventListener("DOMContentLoaded", function () {
    console.log("proj3.js is successfully loaded!");

    const resultDiv = document.getElementById("result");

    document.getElementById("userForm").addEventListener("submit", function (event) {
        setTimeout(() => { 
            const message = resultDiv.innerHTML;
            
            if (message.includes("You have lived for")) {
                resultDiv.innerHTML += `<p style="color: blue;">Keep going strong! </p>`;
                console.log("Additional motivation message added from proj3.js");
            }
        }, 100);
    });
});
