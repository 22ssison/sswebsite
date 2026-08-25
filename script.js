// Smooth scrolling for nav links
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a, .hero-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

// Filter projects by category
function filterProjects(category) {
    const cards = document.querySelectorAll('.proj-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Toggle active state on filter buttons as default
    buttons.forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }

    // Show or hide project cards based on category matching
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Interactive Timeline
document.addEventListener('DOMContentLoaded', () => {
    const timelineElements = document.querySelectorAll('.timeline-element');

    timelineElements.forEach(element => {
        element.style.cursor = 'pointer';
        element.addEventListener('click', () => {
            // Toggle highlight background on click
            const isActive = element.classList.contains('active-timeline');
            
            // Clear all current active highlights
            timelineElements.forEach(item => {
                item.classList.remove('active-timeline');
                item.style.backgroundColor = 'transparent';
                item.style.paddingLeft = '0px';
            });

            // If not previously active, expand clicked element
            if (!isActive) {
                element.classList.add('active-timeline');
                element.style.backgroundColor = '#fafafa';
                element.style.paddingLeft = '15px';
                element.style.transition = 'all 0.3s ease';
            }
        });
    });
});