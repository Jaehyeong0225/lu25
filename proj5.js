document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image-gallery img");

    images.forEach(img => {
        img.addEventListener("click", function () {
            let existingOverlay = document.querySelector(".image-overlay");
            if (existingOverlay) {
                existingOverlay.remove();
            }

            let overlay = document.createElement("div");
            overlay.classList.add("image-overlay");

            let newImage = document.createElement("img");
            newImage.src = this.src;
            newImage.alt = "Overlay Image";

            overlay.addEventListener("click", function () {
                overlay.remove();
            });

            overlay.appendChild(newImage);
            document.body.appendChild(overlay);
        });
    });
});
