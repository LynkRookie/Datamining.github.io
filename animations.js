document.addEventListener('DOMContentLoaded', (event) => {
    const fadeElems = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    fadeElems.forEach(elem => {
        elem.style.opacity = 0;
        elem.style.transform = 'translateY(20px)';
        elem.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        observer.observe(elem);
    });
});