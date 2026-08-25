// smooth scrolling for nav links
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

// filter projects by category
function filterProjects(category) {
    const cards = document.querySelectorAll('.proj-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // toggle active state on filter buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    if (window.event && window.event.target) {
        window.event.target.classList.add('active');
    }

    // show or hide project cards based on category
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// interactive timeline highlight
document.addEventListener('DOMContentLoaded', () => {
    const timelineElements = document.querySelectorAll('.timeline-element');

    timelineElements.forEach(element => {
        element.style.cursor = 'pointer';
        element.addEventListener('click', () => {
            const isActive = element.classList.contains('active-timeline');
            
            timelineElements.forEach(item => {
                item.classList.remove('active-timeline');
                item.style.backgroundColor = 'transparent';
                item.style.paddingLeft = '0px';
            });

            if (!isActive) {
                element.classList.add('active-timeline');
                element.style.backgroundColor = '#fafafa';
                element.style.paddingLeft = '15px';
                element.style.transition = 'all 0.3s ease';
            }
        });
    });
});

// scrolling progress bar in the nav (loading)
window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        progressBar.style.width = scrolled + '%';
    }
});

// scroll reveal observer of user
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => {
        observer.observe(el);
    });
});