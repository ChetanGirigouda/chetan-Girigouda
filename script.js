// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Form Validation
const form = document.getElementById('contact-form');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        alert('Message sent successfully!');
        form.reset();
    });
}

// Ensure only one video plays at a time
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("video").forEach(video => {
        video.addEventListener("play", function () {
            document.querySelectorAll("video").forEach(v => {
                if (v !== video) v.pause();
            });
        });
    });
});

// Social Links Hover Effect
document.querySelectorAll(".social-links a").forEach(link => {
    link.addEventListener("mouseover", () => link.style.transform = "scale(1.2)");
    link.addEventListener("mouseleave", () => link.style.transform = "scale(1)");
});

// Align Social Links
document.addEventListener("DOMContentLoaded", function () {
    const socialContainer = document.querySelector(".social-links");
    if (socialContainer) {
        Object.assign(socialContainer.style, {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            textAlign: "center",
            marginTop: "20px",
            gap: "15px"
        });
    }
});

// Center Report Section
document.addEventListener("DOMContentLoaded", function () {
    const reportSection = document.querySelector(".report-section");
    if (reportSection) {
        Object.assign(reportSection.style, {
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        });
    }
});
