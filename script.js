// Contact Form Handler
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("confirmationMessage").textContent = "Thanks for your message! I'll get back to you soon.";
  this.reset();
});

// Dark Mode Toggle
document.getElementById("toggleDarkMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Typing Animation
const typingText = ["Computer Science Student", "Developer", "Tech Enthusiast"];
let index = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function type() {
  if (charIndex < typingText[index].length) {
    typingElement.textContent += typingText[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = typingText[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % typingText.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 500);
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";

  // Section reveal
  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add("visible");
    }
  });
};

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
