// script.js

// Scroll animation: tampilkan section saat discroll
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("active");
    }
  });
});

// Back to top button
const backToTop = document.createElement("div");
backToTop.className = "back-to-top";
backToTop.innerHTML = "↑";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Mobile navigation toggle
const nav = document.querySelector("nav");
const navLinks = document.querySelector(".nav-links");

const menuBtn = document.createElement("div");
menuBtn.className = "menu-btn";
menuBtn.innerHTML = "☰";

document.querySelector(".nav-container").appendChild(menuBtn);

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
});