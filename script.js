// ================= AGE VERIFICATION =================

const ageScreen = document.getElementById("ageScreen");
const enterBtn = document.getElementById("enterBtn");
const exitBtn = document.getElementById("exitBtn");

if (ageScreen) {
    document.body.classList.add("locked");
}

if (enterBtn) {
    enterBtn.addEventListener("click", () => {
        ageScreen.classList.add("hide");
        document.body.classList.remove("locked");
    });
}

if (exitBtn) {
    exitBtn.addEventListener("click", () => {
        window.location.href = "about:blank";
    });
}


// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });

}


// ================= HEADER SCROLL =================

const header = document.getElementById("header");

function updateHeader() {

    if (header) {
        header.classList.toggle("scrolled", window.scrollY > 40);
    }

}

window.addEventListener("scroll", updateHeader, {
    passive: true
});

updateHeader();


// ================= CURRENT YEAR =================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ================= SCROLL REVEAL =================

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealItems.forEach((item) => {
        revealObserver.observe(item);
    });

} else {

    revealItems.forEach((item) => {
        item.classList.add("visible");
    });

}
// ================= HERO VIDEO SMOKE =================

const smokeVideo = document.querySelector(".hero-smoke-video");

if (smokeVideo) {

    smokeVideo.muted = true;

    const playSmoke = () => {

        const playPromise = smokeVideo.play();

        if (playPromise !== undefined) {

            playPromise.catch(() => {
                console.log("Smoke video autoplay blocked.");
            });

        }

    };

    playSmoke();

    document.addEventListener("visibilitychange", () => {

        if (document.hidden) {
            smokeVideo.pause();
        } else {
            playSmoke();
        }

    });

}


// ================= HERO MOUSE PARALLAX =================
// New hero is a full-width image banner.
// No mouse parallax is needed.