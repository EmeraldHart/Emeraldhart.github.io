/* =========================
   EMERALD HART - JS
   Interactions + Animations
========================= */

/* -------------------------
   MOBILE MENU
------------------------- */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* close menu when clicking a link */
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

/* -------------------------
   SCROLL REVEAL
------------------------- */

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    },
    {
        threshold: 0.12
    }
);

reveals.forEach(el => observer.observe(el));

/* -------------------------
   NAVBAR SCROLL EFFECT
------------------------- */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(10,10,10,0.85)";
        navbar.style.borderColor = "rgba(212,175,55,0.25)";
    } else {
        navbar.style.background = "rgba(15,15,15,0.55)";
        navbar.style.borderColor = "rgba(255,255,255,0.08)";
    }
});

/* -------------------------
   GALLERY LIGHTBOX
------------------------- */

const images = document.querySelectorAll(".gallery img");

images.forEach(img => {
    img.addEventListener("click", () => {

        const overlay = document.createElement("div");
        overlay.classList.add("lightbox");

        const fullImg = document.createElement("img");
        fullImg.src = img.src;

        overlay.appendChild(fullImg);
        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => {
            overlay.remove();
        });
    });
});

/* -------------------------
   LIGHTBOX STYLES (INJECTED)
   (keeps CSS file clean)
------------------------- */

const style = document.createElement("style");

style.innerHTML = `
.lightbox{
    position:fixed;
    inset:0;
    background:rgba(0,0,0,0.92);
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:9999;
    cursor:pointer;
}

.lightbox img{
    max-width:90%;
    max-height:90%;
    border-radius:20px;
    box-shadow:0 0 80px rgba(212,175,55,0.2);
}
`;

document.head.appendChild(style);

/* -------------------------
   SMOOTH SCROLL (fallback)
------------------------- */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});