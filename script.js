document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");

    elements.forEach((element, index) => {
        setTimeout(() => {
            animateText(element);
        }, index * 1000); // Each line appears after the previous one
    });

    function animateText(element) {
        const text = element.getAttribute("data-text");
        element.textContent = "";
        let i = 0;

        function writeText() {
            if (i < text.length) {
                element.textContent += text[i];
                i++;
                setTimeout(writeText, 100); // Adjust speed of typing effect
            }
        }

        writeText();
    }
});


// -----------slide show---------------

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Initialize first slide
showSlide(currentSlide);



