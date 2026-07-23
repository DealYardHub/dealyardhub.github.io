/* ==========================================
   DEALYARD HUB
   Main JavaScript File
========================================== */

"use strict";

/* ==========================================
   MOBILE MENU
========================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}/* ==========================================
   SMOOTH SCROLLING
========================================== */

const navItems = document.querySelectorAll('a[href^="#"]');

navItems.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

        // Close mobile menu after clicking a link
        if (navLinks) {
            navLinks.classList.remove("active");
        }

    });

});/* ==========================================
   STICKY HEADER & ACTIVE NAVIGATION
========================================== */

const header = document.querySelector("header");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    // Header shadow on scroll
    if (header) {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.25)";
        } else {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.20)";
        }
    }

    // Highlight active navigation link
    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(
    ".service-card, .about-content, .contact-content"
);

const revealOnScroll = () => {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        } else {

            element.style.opacity = "0";
            element.style.transform = "translateY(40px)";

        }

    });

};

// Run on page load
revealOnScroll();

// Run while scrolling
window.addEventListener("scroll", revealOnScroll);/* ==========================================
   BACK TO TOP BUTTON
========================================== */

// Create button
const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";
backToTop.id = "backToTop";

document.body.appendChild(backToTop);

// Button styling
backToTop.style.position = "fixed";
backToTop.style.bottom = "25px";
backToTop.style.right = "25px";
backToTop.style.width = "50px";
backToTop.style.height = "50px";
backToTop.style.border = "none";
backToTop.style.borderRadius = "50%";
backToTop.style.background = "#d4af37";
backToTop.style.color = "#000";
backToTop.style.fontSize = "24px";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.zIndex = "999";
backToTop.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
backToTop.style.transition = "0.3s";

// Show/Hide button
window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

});

// Scroll to top
backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});/* ==========================================
   CONTACT FORM VALIDATION
========================================== */

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = this.querySelector('input[type="text"]');
        const email = this.querySelector('input[type="email"]');
        const message = this.querySelector("textarea");

        if (!name.value.trim()) {
            alert("Please enter your name.");
            name.focus();
            return;
        }

        if (!email.value.trim()) {
            alert("Please enter your email address.");
            email.focus();
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value)) {
            alert("Please enter a valid email address.");
            email.focus();
            return;
        }

        if (!message.value.trim()) {
            alert("Please enter your message.");
            message.focus();
            return;
        }

        alert("Thank you! Your message has been sent successfully.");

        this.reset();

    });

}/* ==========================================
   BUTTON & CARD INTERACTIONS
========================================== */

// Button click animation
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        this.style.transform = "scale(0.95)";

        setTimeout(() => {

            this.style.transform = "";

        }, 150);

    });

});

/* ==========================================
   SERVICE CARD HOVER EFFECT
========================================== */

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});

/* ==========================================
   IMAGE HOVER EFFECT
========================================== */

const aboutImage = document.querySelector(".about-image img");

if (aboutImage) {

    aboutImage.addEventListener("mouseenter", () => {

        aboutImage.style.transition = "0.4s";
        aboutImage.style.transform = "scale(1.05)";

    });

    aboutImage.addEventListener("mouseleave", () => {

        aboutImage.style.transform = "scale(1)";

    });

}/* ==========================================
   PAGE LOAD & FOOTER YEAR
========================================== */

// Smooth page fade-in
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Set initial body opacity if not already set
document.body.style.opacity = "0";
document.body.style.transition = "opacity 0.5s ease-in-out";

/* ==========================================
   AUTO UPDATE COPYRIGHT YEAR
========================================== */

const yearElement = document.getElementById("currentYear");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log("==================================");
console.log(" DealYard Hub Website Loaded ");
console.log(" Version 2.0");
console.log(" Developed for Nigel Takunda Mujiche");
console.log("==================================");

/* ==========================================
   END OF SCRIPT.JS
========================================== */