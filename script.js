// ============================================
// ADITYA JAISWAL | ANDROID DEVELOPER PORTFOLIO
// Complete JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function () {

    /* =========================
       AURA BACKGROUND
    ========================= */

    function createAuraBackground() {

        if (document.querySelector('.aura-bg')) return;

        const aura = document.createElement("div");

        aura.className = "aura-bg";

        aura.innerHTML = `
        <div class="aura-orb aura-orb-1"></div>
        <div class="aura-orb aura-orb-2"></div>
        <div class="aura-orb aura-orb-3"></div>
        <div class="aura-orb aura-orb-4"></div>
        `;

        document.body.prepend(aura);
    }

    createAuraBackground();


    /* =========================
       PARTICLE BACKGROUND
    ========================= */

    function initParticles() {

        const canvas = document.createElement("canvas");
        canvas.id = "particle-canvas";

        document.body.appendChild(canvas);

        const ctx = canvas.getContext("2d");

        let particles = [];

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        function createParticles() {

            particles = [];

            for (let i = 0; i < 80; i++) {

                particles.push({

                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,

                    r: Math.random() * 2 + 1,

                    sx: (Math.random() - 0.5) * 0.3,
                    sy: (Math.random() - 0.5) * 0.3,

                    color: "rgba(255,215,0,0.4)"

                });

            }
        }

        function animate() {

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {

                p.x += p.sx;
                p.y += p.sy;

                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;

                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

                ctx.fillStyle = p.color;
                ctx.fill();

            });

            requestAnimationFrame(animate);
        }

        window.addEventListener("resize", () => {
            resize();
            createParticles();
        });

        resize();
        createParticles();
        animate();
    }

    initParticles();


    /* =========================
       STARS BACKGROUND
    ========================= */

    const starsContainer = document.getElementById("stars");

    if (starsContainer) {

        for (let i = 0; i < 200; i++) {

            const star = document.createElement("div");

            star.className = "star";

            star.style.left = Math.random() * 100 + "%";
            star.style.top = Math.random() * 100 + "%";

            star.style.width = Math.random() * 3 + "px";
            star.style.height = star.style.width;

            star.style.animationDelay = Math.random() * 5 + "s";

            starsContainer.appendChild(star);
        }

    }


    /* =========================
       TYPING ANIMATION
    ========================= */

    const typing = document.querySelector(".typing");

    const texts = [
        "📱 Android Developer",
        "⚡ Kotlin • Firebase • Django",
        "🚀 Building Real Apps",
        "🛡 Women Safety & Monitoring Apps"
    ];

    let textIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        if (!typing) return;

        const current = texts[textIndex];

        if (deleting) {

            typing.textContent = current.substring(0, charIndex--);

        } else {

            typing.textContent = current.substring(0, charIndex++);

        }

        if (!deleting && charIndex === current.length) {

            deleting = true;
            setTimeout(typeEffect, 1500);
            return;

        }

        if (deleting && charIndex === 0) {

            deleting = false;
            textIndex = (textIndex + 1) % texts.length;

        }

        setTimeout(typeEffect, deleting ? 40 : 80);
    }

    typeEffect();


    /* =========================
       SCROLL REVEAL
    ========================= */

    const sections = document.querySelectorAll("section");

    function reveal() {

        sections.forEach(sec => {

            const top = sec.getBoundingClientRect().top;

            if (top < window.innerHeight - 100) {

                sec.classList.add("show");

            }

        });

    }

    window.addEventListener("scroll", reveal);

    reveal();


    /* =========================
       NAVBAR SCROLL
    ========================= */

    const nav = document.querySelector("nav");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            nav.classList.add("scrolled");

        } else {

            nav.classList.remove("scrolled");

        }

    });


    /* =========================
       SMOOTH SCROLL
    ========================= */

    document.querySelectorAll("nav a").forEach(link => {

        link.addEventListener("click", function (e) {

            const id = this.getAttribute("href");

            if (id.startsWith("#")) {

                e.preventDefault();

                document.querySelector(id).scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    /* =========================
       PROJECT IMAGE SLIDER
    ========================= */

    const sheImages = [
        "images/she1.png",
        "images/she2.png",
        "images/she3.png"
    ];

    const familyImages = [
        "images/family1.png",
        "images/family2.png",
        "images/family3.png"
    ];

    let sheIndex = 0;
    let familyIndex = 0;

    const sheSlider = document.getElementById("sheSlider");
    const familySlider = document.getElementById("familySlider");

    if (sheSlider) {

        setInterval(() => {

            sheSlider.style.opacity = "0";

            setTimeout(() => {

                sheIndex = (sheIndex + 1) % sheImages.length;

                sheSlider.src = sheImages[sheIndex];

                sheSlider.style.opacity = "1";

            }, 200);

        }, 3000);

    }

    if (familySlider) {

        setInterval(() => {

            familySlider.style.opacity = "0";

            setTimeout(() => {

                familyIndex = (familyIndex + 1) % familyImages.length;

                familySlider.src = familyImages[familyIndex];

                familySlider.style.opacity = "1";

            }, 200);

        }, 3000);

    }


    /* =========================
       SCROLL PROGRESS BAR
    ========================= */

    const progress = document.createElement("div");

    progress.style.position = "fixed";
    progress.style.top = "0";
    progress.style.left = "0";
    progress.style.height = "3px";
    progress.style.background = "#FFD700";
    progress.style.zIndex = "9999";

    document.body.appendChild(progress);

    window.addEventListener("scroll", () => {

        const scroll = window.scrollY;

        const height = document.body.scrollHeight - window.innerHeight;

        progress.style.width = (scroll / height) * 100 + "%";

    });


    /* =========================
       BACK TO TOP
    ========================= */

    const topBtn = document.createElement("button");

    topBtn.innerHTML = "↑";

    topBtn.style.position = "fixed";
    topBtn.style.bottom = "30px";
    topBtn.style.right = "30px";

    topBtn.style.width = "45px";
    topBtn.style.height = "45px";

    topBtn.style.borderRadius = "50%";

    topBtn.style.background = "#FFD700";
    topBtn.style.border = "none";

    topBtn.style.cursor = "pointer";

    document.body.appendChild(topBtn);

    topBtn.onclick = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };


    /* =========================
       FOOTER YEAR
    ========================= */

    const footer = document.querySelector("footer");

    if (footer) {

        const year = new Date().getFullYear();

        footer.innerHTML = `© ${year} Aditya Jaiswal | Android Developer`;

    }


    console.log("🚀 Portfolio Loaded Successfully");

});