// js/main.js
document.addEventListener("DOMContentLoaded", () => {
    // Manejar el acordeón
    document.querySelectorAll(".section-title").forEach(title => {
        const icon = title.querySelector(".toggle-section");
        const wrapper = title.nextElementSibling; // section-content-wrapper

        // Inicialmente abierto
        wrapper.classList.remove("collapsed");
        icon.textContent = "−";

        title.addEventListener("click", () => {
            const isOpen = icon.textContent === "−";
            
            if (isOpen) {
                wrapper.classList.add("collapsed");
                icon.textContent = "+";
            } else {
                wrapper.classList.remove("collapsed");
                icon.textContent = "−";
            }
        });
    });
});