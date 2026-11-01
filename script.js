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

/*-------------------------
    AUTO GALLERY
--------------------------*/

const galleryImages = [
  "Boheme2.jpg",
  "Bohemetrio.jpg",
  "Carosel.jpg",
  "Emerald Hart Smile.JPG",
  "H&g Lanterns Sleep.jpg",
  "H&G Lanterns2.jpg",
  "H&G Sleep.jpg",
  "H7g Lanterns Magic.jpg",
  "Hansel&Gretel Sing.jpg",
  "Hansel&Gretel.jpg",
  "HJE Book.jpg",
  "HJE Convo.jpg",
  "HJE Sheet.jpg",
  "HJE Stool.jpg",
  "HJE Veil Off.jpg",
  "HJE Veil.jpg",
  "HJE Wedding CLose.jpg",
  "HJE Wedding Far.jpg",
  "RagtimeDance.jpg",
  "RagtimeFactory.jpg",
  "RagtimeHC.jpg",
  "RagtimePiano.jpg",
  "RagtimeTrioSing.jpg",
  "RagtimeVigil.jpg",
  "RentPhone.JPG",
  "RentSeasonsofLove.JPG",
  "Takemeorleaveme.JPG"
]

const gallery = document.getElementById("gallery-container");

if (gallery) {
    galleryImages.forEach(image => {
        const img = document.createElement("img");

        img.src = `./images/Gallery/${image}`;
        img.alt = image;
        img.classList.add("gallery-image");

        img.addEventListener("click", () => {
            const overlay = document.getElementById("image-lightbox");
            const enlargedImage = document.getElementById("lightbox-image");

            enlargedImage.src = img.src;
            enlargedImage.alt = img.alt;

            overlay.classList.add("active");
        });

        gallery.appendChild(img);
    });
}

// Close lightbox when clicking the background
const lightbox = document.getElementById("image-lightbox");
const enlargedImage = document.getElementById("lightbox-image");
const closeButton = document.getElementById("lightbox-close");

// Close lightbox
function closeLightbox() {
    lightbox.classList.remove("active");
}

// Close button
closeButton.addEventListener("click", (event) => {
    event.stopPropagation();
    closeLightbox();
});

// Click background to close
lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

// Escape key to close
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeLightbox();
    }
});