document.addEventListener("DOMContentLoaded", () => {
    // Menu Toggle Logic
    const menuButton = document.getElementById("menuButton");
    const menu = document.getElementById("menu");
    const backButton = document.getElementById("backButton");
    const menuLinks = document.querySelectorAll(".menu-link");

    menuButton.addEventListener("click", () => {
        menu.classList.toggle("active");
        menuButton.classList.toggle("active");
    });

    backButton.addEventListener("click", () => {
        menu.classList.remove("active");
        menuButton.classList.remove("active");
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
            menuButton.classList.remove("active");
        });
    });

    // About Section Observer
    const aboutSection = document.querySelector(".about-container");
    if (aboutSection) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    aboutSection.style.opacity = "1";
                }
            });
        }, { threshold: 0.5 });

        observer.observe(aboutSection);
    }

    // Smooth Scroll to About Section
    const scrollDown = document.querySelector(".scroll-indicator");
    if (scrollDown) {
        scrollDown.addEventListener("click", () => {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

    // Projects Section Carousel
    const slides = document.querySelectorAll(".project-slide");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let currentIndex = 0;

    if (slides.length > 0) {
        const showSlide = index => {
            slides.forEach((slide, i) => {
                slide.classList.toggle("active", i === index);
            });
        };

        const autoSlide = () => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        };

        let slideInterval = setInterval(autoSlide, 4000);

        nextBtn?.addEventListener("click", () => {
            clearInterval(slideInterval);
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
            slideInterval = setInterval(autoSlide, 4000);
        });

        prevBtn?.addEventListener("click", () => {
            clearInterval(slideInterval);
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
            slideInterval = setInterval(autoSlide, 4000);
        });

        showSlide(currentIndex);
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

