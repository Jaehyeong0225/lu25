document.addEventListener("DOMContentLoaded", function () {
    let currentPath = window.location.pathname.split("/").pop(); 

    let navLinks = document.querySelectorAll(".menu-bar a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            navLinks.forEach(l => l.classList.remove("active"));

            link.classList.add("active");
        }
    });
});
