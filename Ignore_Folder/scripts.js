// Ensure the DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Handle contact form submission
    const contactForm = document.querySelector('.vertical-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Message sent!');
        });
    }

    // Show more projects functionality
    const showMoreBtn = document.getElementById('show-more-btn');
    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', function() {
            const moreProjects = document.querySelectorAll('.more-projects');
            moreProjects.forEach(project => {
                project.style.display = (project.style.display === 'none' || project.style.display === '') ? 'block' : 'none';
            });
            this.style.display = 'none';
        });
    }

    // Highlight navbar links on click
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Zoom in services on hover
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
