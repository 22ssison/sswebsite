// Smooth scroll for nav links
const navLinks = document.querySelectorAll('nav ul li a, .hero-link');

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
}

// Filter project cards by category
function filterProjects(category) {
    const cards = document.querySelectorAll('.proj-card');
    const buttons = document.querySelectorAll('.filter-btn');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    if (window.event && window.event.target) {
        window.event.target.classList.add('active');
    }

    for (let i = 0; i < cards.length; i++) {
        const cardCategory = cards[i].getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
            cards[i].style.display = 'block';
        } else {
            cards[i].style.display = 'none';
        }
    }
}

// Click highlight for timeline
const timelineItems = document.querySelectorAll('.timeline-element');

for (let i = 0; i < timelineItems.length; i++) {
    timelineItems[i].style.cursor = 'pointer';
    timelineItems[i].addEventListener('click', function() {
        for (let j = 0; j < timelineItems.length; j++) {
            timelineItems[j].style.backgroundColor = 'transparent';
            timelineItems[j].style.paddingLeft = '0px';
        }
        this.style.backgroundColor = '#fafafa';
        this.style.paddingLeft = '15px';
        this.style.transition = 'all 0.3s ease';
    });
}

// Scrolling progress bar
window.addEventListener('scroll', function() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const percentage = (scrollTop / totalHeight) * 100;
    
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        progressBar.style.width = percentage + '%';
    }
});

// Scroll reveal animation
document.addEventListener('DOMContentLoaded', function() {
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(function(entries) {
        for (let i = 0; i < entries.length; i++) {
            if (entries[i].isIntersecting) {
                entries[i].target.classList.add('active');
            }
        }
    }, {
        threshold: 0.15
    });

    for (let i = 0; i < revealElements.length; i++) {
        observer.observe(revealElements[i]);
    }
});
