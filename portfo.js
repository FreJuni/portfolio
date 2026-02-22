const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    if (dot) {
        dot.style.left = `${posX}px`;
        dot.style.top = `${posY}px`;
    }
    
    if (outline) {
        outline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    }
});

const links = document.querySelectorAll('a, button');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        if (outline) {
            outline.style.width = '60px';
            outline.style.height = '60px';
            outline.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        }
    });
    link.addEventListener('mouseleave', () => {
        if (outline) {
            outline.style.width = '40px';
            outline.style.height = '40px';
            outline.style.backgroundColor = 'transparent';
        }
    });
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle');
    });
}

navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks) navLinks.classList.remove('nav-active');
        if (hamburger) hamburger.classList.remove('toggle');
    });
});

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const link = document.querySelector('.nav-links a[href*=' + sectionId + ']');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if(link) link.classList.add('active');
        } else {
            if(link) link.classList.remove('active');
        }
    });
}
window.addEventListener('scroll', scrollActive);

if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 2000,
        delay: 200,
        reset: false 
    });

    sr.reveal('.reveal-fade-up', { origin: 'bottom', interval: 100 });
}

const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

if (contactForm) {
    const sendEmail = (e) => {
        e.preventDefault();

        if (typeof emailjs !== 'undefined') {
            emailjs.sendForm(
                "service_37isze5",
                "template_b7nev5q",
                "#contact-form",
                "beOoQWNgUeNUmxcXV"
            )
            .then(
                () => {
                    contactMessage.textContent = "Message sent successfully!";
                    contactMessage.style.color = "#4caf50";

                    setTimeout(() => {
                        contactMessage.textContent = "";
                    }, 5000);

                    contactForm.reset();
                },
                () => {
                    contactMessage.textContent = "Message not sent (service error). Please try again later.";
                    contactMessage.style.color = "#ff4d4f";
                    setTimeout(() => {
                        contactMessage.textContent = "";
                    }, 5000);

                    contactForm.reset();
                }
            );
        } else {
            contactMessage.textContent = "EmailJS service is not loaded correctly.";
            contactMessage.style.color = "#ff4d4f";
        }
    };
    contactForm.addEventListener("submit", sendEmail);
}
