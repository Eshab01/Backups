document.addEventListener("DOMContentLoaded", function() {
    animateHeader();
    animateSections();
});

function animateHeader() {
    const header = document.querySelector("header");
    header.style.opacity = 0;
    header.style.transform = "translateY(-50px)";
    setTimeout(() => {
        header.style.transition = "opacity 1s, transform 1s";
        header.style.opacity = 1;
        header.style.transform = "translateY(0)";
    }, 500);
}

function animateSections() {
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
        section.style.opacity = 0;
        section.style.transform = "translateY(50px)";
        setTimeout(() => {
            section.style.transition = "opacity 1s, transform 1s";
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }, (index + 1) * 500);
    });
}
