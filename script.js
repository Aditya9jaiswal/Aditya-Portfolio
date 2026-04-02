// ============================================
// ADITYA JAISWAL | ANDROID DEVELOPER PORTFOLIO
// ULTRA SMOOTH JAVASCRIPT
// Professional Smooth Scrolling & Animations
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
       PARTICLE BACKGROUND (Optimized)
    ========================= */

    function initParticles() {
        const canvas = document.createElement("canvas");
        canvas.id = "particle-canvas";
        document.body.appendChild(canvas);
        const ctx = canvas.getContext("2d");
        let particles = [];
        let animationId = null;

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        function createParticles() {
            particles = [];
            const particleCount = Math.min(80, Math.floor(window.innerWidth / 20));
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    r: Math.random() * 2 + 1,
                    sx: (Math.random() - 0.5) * 0.25,
                    sy: (Math.random() - 0.5) * 0.25,
                    color: `rgba(255,215,0,${Math.random() * 0.3 + 0.2})`
                });
            }
        }

        function animate() {
            if (!ctx) return;
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
            animationId = requestAnimationFrame(animate);
        }

        window.addEventListener("resize", () => {
            resize();
            createParticles();
        });

        resize();
        createParticles();
        animate();
        
        // Cleanup function if needed
        window.cleanupParticles = function() {
            if (animationId) cancelAnimationFrame(animationId);
        };
    }
    initParticles();

    /* =========================
       STARS BACKGROUND
    ========================= */

    const starsContainer = document.getElementById("stars");
    if (starsContainer) {
        const starCount = Math.min(200, Math.floor(window.innerWidth / 8));
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement("div");
            star.className = "star";
            star.style.left = Math.random() * 100 + "%";
            star.style.top = Math.random() * 100 + "%";
            star.style.width = Math.random() * 3 + "px";
            star.style.height = star.style.width;
            star.style.animationDelay = Math.random() * 5 + "s";
            star.style.animationDuration = 2 + Math.random() * 3 + "s";
            starsContainer.appendChild(star);
        }
    }

    /* =========================
       TYPING ANIMATION (Smooth)
    ========================= */

    const typing = document.querySelector(".typing");
    if (typing) {
        const texts = [
            "📱 Android Developer",
            "⚡ Kotlin • Firebase • Django",
            "🚀 Building Real Apps",
            "🛡 Women Safety & Monitoring Apps"
        ];
        let textIndex = 0;
        let charIndex = 0;
        let deleting = false;
        let typingTimeout = null;

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
                typingTimeout = setTimeout(typeEffect, 1500);
                return;
            }
            if (deleting && charIndex === 0) {
                deleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }
            typingTimeout = setTimeout(typeEffect, deleting ? 40 : 80);
        }
        typeEffect();
    }

    /* =========================
       INTERSECTION OBSERVER (Ultra Smooth Scroll Reveal)
    ========================= */

    const sections = document.querySelectorAll("section");
    
    // Use Intersection Observer for better performance
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                // Optional: unobserve after showing for performance
                // sectionObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Also check for any sections already visible
    setTimeout(() => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                section.classList.add("show");
            }
        });
    }, 100);

    /* =========================
       NAVBAR SCROLL (Smooth Transition)
    ========================= */

    const nav = document.querySelector("nav");
    let lastScrollY = 0;
    let ticking = false;

    window.addEventListener("scroll", () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                if (window.scrollY > 50) {
                    nav.classList.add("scrolled");
                } else {
                    nav.classList.remove("scrolled");
                }
                lastScrollY = window.scrollY;
                ticking = false;
            });
            ticking = true;
        }
    });

    /* =========================
       ULTRA SMOOTH SCROLL (Enhanced)
    ========================= */

    document.querySelectorAll("nav a, .hero-buttons .btn").forEach(link => {
        link.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            if (href && href.startsWith("#")) {
                e.preventDefault();
                const targetId = href;
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const navHeight = nav.offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight - 10;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    /* =========================
       PROJECT IMAGE SLIDER (Smooth Crossfade)
    ========================= */

    // SheShield Images
    const sheImages = [
        "images/she1.png",
        "images/she2.png",
        "images/she3.png"
    ];
    
    // FamilyShield Images
    const familyImages = [
        "images/family1.png",
        "images/family2.png",
        "images/family3.png"
    ];

    let sheIndex = 0;
    let familyIndex = 0;
    let sheInterval = null;
    let familyInterval = null;

    const sheSlider = document.getElementById("sheSlider");
    const familySlider = document.getElementById("familySlider");

    // Smooth slider function with crossfade
    function initSmoothSlider(slider, images, indexRef, intervalTime = 3000) {
        if (!slider) return null;
        
        // Preload images
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });
        
        return setInterval(() => {
            // Fade out
            slider.style.transition = "opacity 0.3s ease-in-out";
            slider.style.opacity = "0";
            
            setTimeout(() => {
                indexRef.value = (indexRef.value + 1) % images.length;
                slider.src = images[indexRef.value];
                // Fade in
                setTimeout(() => {
                    slider.style.opacity = "1";
                }, 50);
            }, 200);
        }, intervalTime);
    }

    if (sheSlider) {
        const sheIndexRef = { value: 0 };
        sheInterval = initSmoothSlider(sheSlider, sheImages, sheIndexRef, 3000);
        // Set initial opacity
        sheSlider.style.transition = "opacity 0.3s ease-in-out";
        sheSlider.style.opacity = "1";
    }

    if (familySlider) {
        const familyIndexRef = { value: 0 };
        familyInterval = initSmoothSlider(familySlider, familyImages, familyIndexRef, 3000);
        familySlider.style.transition = "opacity 0.3s ease-in-out";
        familySlider.style.opacity = "1";
    }

    /* =========================
       SCROLL PROGRESS BAR (Smooth)
    ========================= */

    const progress = document.createElement("div");
    progress.style.position = "fixed";
    progress.style.top = "0";
    progress.style.left = "0";
    progress.style.height = "3px";
    progress.style.background = "linear-gradient(90deg, #FFD700, #ffaa00)";
    progress.style.zIndex = "9999";
    progress.style.transition = "width 0.1s linear";
    progress.style.width = "0%";
    document.body.appendChild(progress);

    let progressTicking = false;
    window.addEventListener("scroll", () => {
        if (!progressTicking) {
            requestAnimationFrame(() => {
                const scroll = window.scrollY;
                const height = document.documentElement.scrollHeight - window.innerHeight;
                const width = height > 0 ? (scroll / height) * 100 : 0;
                progress.style.width = width + "%";
                progressTicking = false;
            });
            progressTicking = true;
        }
    });

    /* =========================
       BACK TO TOP (Smooth with Visibility)
    ========================= */

    const topBtn = document.createElement("button");
    topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    topBtn.id = "back-to-top";
    topBtn.setAttribute("aria-label", "Back to top");
    topBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #FFD700, #ffaa00);
        border: none;
        color: #0a0a1a;
        cursor: pointer;
        font-size: 1.3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
        z-index: 999;
    `;
    document.body.appendChild(topBtn);

    // Show/hide back to top button
    let topBtnTicking = false;
    window.addEventListener("scroll", () => {
        if (!topBtnTicking) {
            requestAnimationFrame(() => {
                if (window.scrollY > 300) {
                    topBtn.classList.add("visible");
                    topBtn.style.opacity = "1";
                    topBtn.style.visibility = "visible";
                } else {
                    topBtn.classList.remove("visible");
                    topBtn.style.opacity = "0";
                    topBtn.style.visibility = "hidden";
                }
                topBtnTicking = false;
            });
            topBtnTicking = true;
        }
    });

    topBtn.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    // Hover effect for back to top
    topBtn.addEventListener("mouseenter", () => {
        topBtn.style.transform = "translateY(-5px) scale(1.05)";
        topBtn.style.boxShadow = "0 8px 25px rgba(255, 215, 0, 0.5)";
    });
    topBtn.addEventListener("mouseleave", () => {
        topBtn.style.transform = "translateY(0) scale(1)";
        topBtn.style.boxShadow = "0 4px 15px rgba(255, 215, 0, 0.3)";
    });

    /* =========================
       FOOTER YEAR
    ========================= */

    const footer = document.querySelector("footer");
    if (footer) {
        const year = new Date().getFullYear();
        const originalText = footer.innerHTML;
        if (originalText.includes("©")) {
            footer.innerHTML = `© ${year} Aditya Jaiswal | Android Developer`;
        }
    }

    /* =========================
       SMOOTH HOVER EFFECTS ENHANCEMENT
    ========================= */
    
    // Add smooth transition to all interactive elements
    const interactiveElements = document.querySelectorAll('.btn, .project-card, .skills span, .contact a, nav a');
    interactiveElements.forEach(el => {
        el.style.willChange = 'transform';
    });

    /* =========================
       PARALLAX EFFECT FOR HERO (Optional Smooth)
    ========================= */
    
    let heroParallaxTicking = false;
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            if (!heroParallaxTicking) {
                requestAnimationFrame(() => {
                    const scrolled = window.scrollY;
                    const rate = scrolled * 0.3;
                    hero.style.transform = `translateY(${rate * 0.1}px)`;
                    heroParallaxTicking = false;
                });
                heroParallaxTicking = true;
            }
        });
    }

    /* =========================
       PREVENT JERKY ANIMATIONS ON RESIZE
    ========================= */
    
    let resizeTimeout;
    window.addEventListener('resize', () => {
        document.body.style.transition = 'none';
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            document.body.style.transition = '';
        }, 100);
    });

    /* =========================
       ADD SMOOTH SCROLL BEHAVIOR TO ALL ANCHOR LINKS
    ========================= */
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === "#" || href === "") return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const navHeight = nav ? nav.offsetHeight : 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    console.log("🚀 Portfolio Loaded Successfully | Ultra Smooth Animations Active");
    
    // Cleanup function for intervals (optional)
    window.cleanupSliders = function() {
        if (sheInterval) clearInterval(sheInterval);
        if (familyInterval) clearInterval(familyInterval);
    };
});