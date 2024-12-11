// JavaScript for interactive elements of Subra Sports homepage

// Burger menu toggle for mobile navigation
document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });
});

// Smooth scroll function to navigate between sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Form validation and submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simple form validation
        const name = contactForm.querySelector('input[placeholder="Your Name"]').value.trim();
        const email = contactForm.querySelector('input[placeholder="Your Email"]').value.trim();
        const message = contactForm.querySelector('textarea[placeholder="Your Message"]').value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields before submitting.");
            return;
        }

        // Simulate form submission (for now, just log to console)
        console.log("Form submitted:", { name, email, message });
        alert("Thank you for reaching out! Your message has been sent.");
        contactForm.reset();
    });
}
