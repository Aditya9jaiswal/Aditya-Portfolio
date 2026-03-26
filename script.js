// TYPING TEXT ANIMATION
const text = "Android Developer • Kotlin • Firebase • Backend APIs";
let i = 0;

function typing() {
    if (i < text.length) {
        document.querySelector(".typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 60);
    }
}

typing();

// SCROLL REVEAL ANIMATION
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

document.querySelectorAll("section").forEach((el) => observer.observe(el));

// NAVBAR SCROLL EFFECT
const navbar = document.querySelector("nav");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// STARS BACKGROUND GENERATOR
const starContainer = document.getElementById("stars");
for (let i = 0; i < 150; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 5 + "s";
    star.style.animationDuration = 3 + Math.random() * 4 + "s";
    const size = 1 + Math.random() * 2;
    star.style.width = size + "px";
    star.style.height = size + "px";
    starContainer.appendChild(star);
}

// SHE SHIELD IMAGE SLIDER - Using your original images
const sheImages = [
    "images/she1.png",
    "images/she2.png",
    "images/she3.png"
];

let sheIndex = 0;
const sheSlider = document.getElementById("sheSlider");
if (sheSlider) {
    setInterval(() => {
        sheIndex = (sheIndex + 1) % sheImages.length;
        sheSlider.src = sheImages[sheIndex];
    }, 4000);
}

// FAMILY SHIELD IMAGE SLIDER - Using your original images
const familyImages = [
    "images/family1.png",
    "images/family2.png",
    "images/family3.png"
];

let familyIndex = 0;
const familySlider = document.getElementById("familySlider");
if (familySlider) {
    setInterval(() => {
        familyIndex = (familyIndex + 1) % familyImages.length;
        familySlider.src = familyImages[familyIndex];
    }, 4200);
}

// Smooth anchor scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Update footer year
const footerYear = document.querySelector('footer p');
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.innerHTML = footerYear.innerHTML.replace('2026', currentYear);
}

console.log("Portfolio ready — Aditya Jaiswal, Android Developer");