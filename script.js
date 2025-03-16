// Smooth Scroll
const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    alert('Message sent successfully!');
    form.reset();
});

// Ensure videos don't autoplay twice
document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll("video");
    
    videos.forEach(video => {
        video.addEventListener("play", function () {
            videos.forEach(v => {
                if (v !== video) v.pause(); // Pause other videos if one is playing
            });
        });
    });
});

// Align Social Links in a Single Line
document.addEventListener("DOMContentLoaded", function () {
    const socialContainer = document.querySelector(".social-links");
    if (socialContainer) {
        socialContainer.style.display = "flex";
        socialContainer.style.justifyContent = "center";
        socialContainer.style.alignItems = "center";
        socialContainer.style.gap = "15px";
    }
});

// Center Report Section
document.addEventListener("DOMContentLoaded", function () {
    const reportSection = document.querySelector(".report-section");
    if (reportSection) {
        reportSection.style.textAlign = "center";
        reportSection.style.display = "flex";
        reportSection.style.flexDirection = "column";
        reportSection.style.alignItems = "center";
        reportSection.style.justifyContent = "center";
    }
});
