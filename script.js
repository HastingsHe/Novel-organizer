document.addEventListener('DOMContentLoaded', function() {
    // Add interactive features like collapsible sections
    const sections = document.querySelectorAll('section');
    
    sections.forEach(function(section) {
        section.addEventListener('click', function() {
            this.classList.toggle('collapsed');
        });
    });
});

// Optional: For more interactivity, you could add smooth scrolling for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
