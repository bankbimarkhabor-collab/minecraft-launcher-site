// Scroll reveal animation
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
});

// Optional: Navbar shadow on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,0.6)";
    } else {
        nav.style.boxShadow = "none";
    }
});
