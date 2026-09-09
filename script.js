// ================= AGE VERIFICATION =================

const ageScreen = document.getElementById("ageScreen");
const enterBtn = document.getElementById("enterBtn");
const exitBtn = document.getElementById("exitBtn");

document.body.classList.add("locked");

if (
    localStorage.getItem("smokeShopAgeVerified") === "true"
) {
    ageScreen.classList.add("hide");
    document.body.classList.remove("locked");
}

enterBtn.addEventListener("click", () => {

    ageScreen.classList.add("hide");

    document.body.classList.remove("locked");

    localStorage.setItem(
        "smokeShopAgeVerified",
        "true"
    );

});

exitBtn.addEventListener("click", () => {

    window.location.href =
        "https://www.google.com";

});


// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

});

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


// ================= HEADER SCROLL =================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// ================= YEAR =================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ================= SCROLL REVEAL =================

const revealItems = document.querySelectorAll(
    ".about-grid, " +
    ".collection-card, " +
    ".store-item, " +
    ".experience-content, " +
    ".experience-image, " +
    ".review-box, " +
    ".contact-content, " +
    ".location-card"
);

const observer = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

revealItems.forEach(item => {

    item.style.opacity = "0";

    item.style.transform =
        "translateY(35px)";

    item.style.transition =
        "opacity .8s ease, transform .8s ease";

    observer.observe(item);

});


// ================= HERO PARALLAX =================

const heroVisual =
    document.querySelector(".hero-visual");

window.addEventListener("mousemove", event => {

    if (
        !heroVisual ||
        window.innerWidth < 900
    ) {
        return;
    }

    const x =
        (window.innerWidth / 2 - event.clientX) / 100;

    const y =
        (window.innerHeight / 2 - event.clientY) / 100;

    heroVisual.style.transform =
        `translate(${x}px, ${y}px)`;

});