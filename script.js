document.addEventListener("DOMContentLoaded", function () {
    let currentPath = window.location.pathname.split("/").pop();

    let navLinks = document.querySelectorAll(".menu-bar a");

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === currentPath || (currentPath === "" && link.getAttribute("href") === "index.html")) {
            link.classList.add("active");
        }
    });
});
